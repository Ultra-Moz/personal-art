import { useEffect, useState } from "react";
import { getNowPlaying, getLastPlayed } from "../services/spotify";

export function useNowPlaying(pollinterval = 10000){
    const [song, setSong] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null)

    async function fetchSong(){
        try{
            let data = await getNowPlaying();

            if (!data){
                data = await getLastPlayed();
            }

            setSong(data);
            setError(null);
        } catch (err){
            setError(err.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchSong()
        const interval = setInterval(fetchSong,pollinterval)
        return () => clearInterval(interval)
    }, pollinterval)

    return {song, loading, error, refresh:fetchSong}
}