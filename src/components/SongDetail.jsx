import React from "react";
import { useSelector } from "react-redux";

const SongDetail = () => {
    const song = useSelector((state) => state.selectedSong);
    if (!song) {
        return <h1>Please, select a song!</h1>;
    }
    return (
        <>
            <h3>Details for:</h3>
            <p>{song.title}</p>
            <p>Duration: {song.duration}</p>
        </>
    );
};

export default SongDetail;
