import { useState, useEffect, useRef } from "react";
import { useNowPlaying } from "../hooks/useNowPlaying";

function formatTime(ms) {
  const totalSecs = Math.floor(ms / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function timeAgo(date) {
  const diff = Math.floor((Date.now() - date) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function NowPlaying() {
  const { song, loading, error } = useNowPlaying(10000);
  const [preview, setPreview] = useState(null);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const audioRef = useRef(null);

  // progress bar ticks forward locally between API polls
  const [localProgress, setLocalProgress] = useState(0);
  useEffect(() => {
    if (song) setLocalProgress(song.progressMs ?? 0);
  }, [song]);
  useEffect(() => {
    if (!song?.isPlaying) return;
    const tick = setInterval(() => setLocalProgress((p) => p + 1000), 1000);
    return () => clearInterval(tick);
  }, [song?.isPlaying]);

  function togglePreview() {
    if (!song?.previewUrl) return;

    if (isPreviewPlaying) {
      audioRef.current?.pause();
      setIsPreviewPlaying(false);
    } else {
      if (!audioRef.current) {
        audioRef.current = new Audio(song.previewUrl);
        audioRef.current.onended = () => setIsPreviewPlaying(false);
      }
      audioRef.current.play();
      setIsPreviewPlaying(true);
    }
  }

  if (loading) {
    return (
      <div className="w-72 bg-black/80 backdrop-blur rounded-2xl p-4 text-zinc-500 text-sm animate-pulse">
        Loading...
      </div>
    );
  }

  if (error || !song) {
    return (
      <div className="w-72 bg-black/80 backdrop-blur rounded-2xl p-4 text-zinc-500 text-sm">
        No recent activity
      </div>
    );
  }

  const progress = Math.min((localProgress / song.durationMs) * 100, 100);

  return (
    <div className="w-72 bg-black/80 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10">
      {/* header */}
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <span className="text-zinc-400 text-xs font-medium uppercase tracking-widest">
          {song.isPlaying ? "Now playing" : "Last played"}
        </span>
        {!song.isPlaying && song.playedAt && (
          <span className="text-zinc-600 text-xs ml-auto">{timeAgo(song.playedAt)}</span>
        )}
        {song.isPlaying && (
          <span className="ml-auto flex gap-0.5 items-end h-3">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-0.5 bg-green-400 rounded-full animate-bounce"
                style={{ height: `${40 + i * 20}%`, animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </span>
        )}
      </div>

      {/* album art + info */}
      <div className="flex gap-3 items-center mb-3">
        {song.albumArt && (
          <img
            src={song.albumArt}
            alt={song.album}
            className="w-14 h-14 rounded-lg object-cover shrink-0 shadow-lg"
          />
        )}
        <div className="min-w-0">
          <a
            href={song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold text-sm leading-tight hover:text-green-400 transition-colors block truncate"
          >
            {song.title}
          </a>
          <p className="text-zinc-400 text-xs mt-0.5 truncate">{song.artist}</p>
          <p className="text-zinc-600 text-xs truncate">{song.album}</p>
        </div>
      </div>

      {/* progress bar */}
      {song.isPlaying && (
        <div className="mb-3">
          <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-400 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-zinc-600 text-xs mt-1">
            <span>{formatTime(localProgress)}</span>
            <span>{formatTime(song.durationMs)}</span>
          </div>
        </div>
      )}

      {/* preview button */}
      {song.previewUrl && (
        <button
          onClick={togglePreview}
          className="w-full flex items-center justify-center gap-2 py-1.5 rounded-lg border border-zinc-700 hover:border-green-500/50 hover:bg-green-500/5 transition-all text-zinc-400 hover:text-green-400 text-xs"
        >
          {isPreviewPlaying ? (
            <>
              <span>■</span> Stop preview
            </>
          ) : (
            <>
              <span>▶</span> Play 30s preview
            </>
          )}
        </button>
      )}
    </div>
  );
}