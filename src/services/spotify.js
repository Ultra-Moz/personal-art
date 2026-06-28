const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

let accessToken = null;
let tokenExpiresAt = 0;

export async function getAccessToken() {
  const refreshToken = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

  if (accessToken && Date.now() < tokenExpiresAt) {
    return accessToken;
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken, // FIX 2: was "refreshToken" (camelCase), Spotify needs snake_case
    }),
  });

  const data = await response.json();
  accessToken = data.access_token;
  tokenExpiresAt = Date.now() + data.expires_in * 1000;
  return accessToken;
}

export async function getNowPlaying() {
  const token = await getAccessToken();

  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  // FIX 3: was "= 204" (assignment), needs "===" (comparison)
  if (response.status === 204 || response.status > 400) {
    return null;
  }

  const data = await response.json();

  if (!data || !data.item) return null;

  return {
    isPlaying: data.is_playing,
    title: data.item.name,
    artist: data.item.artists.map((a) => a.name).join(", "),
    album: data.item.album.name,
    albumArt: data.item.album.images[0]?.url,
    songUrl: data.item.external_urls.spotify,
    previewUrl: data.item.preview_url,
    progressMs: data.progress_ms,
    durationMs: data.item.duration_ms,
  };
}

export async function getLastPlayed() {
  const token = await getAccessToken();

  const response = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await response.json();

  if (!data.items?.length) return null;

  const item = data.items[0];

  return {
    isPlaying: false,
    title: item.track.name,
    artist: item.track.artists.map((a) => a.name).join(", "),
    album: item.track.album.name,
    albumArt: item.track.album.images[0]?.url,
    songUrl: item.track.external_urls.spotify,
    previewUrl: item.track.preview_url,
    playedAt: new Date(item.played_at),
    progressMs: 0,
    durationMs: item.track.duration_ms,
  };
}
