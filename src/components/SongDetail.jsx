import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    return song ? (
        <div>
            <h3>Details for:</h3>
            <p>{song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    ) : (
        <div>Please, select a song!</div>
    );
};

const mapState = (state) => {
    return {
        song: state.selectedSong,
    };
};

export default connect(mapState)(SongDetail);
