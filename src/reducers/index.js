import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {
            title: "No Scrubs",
            duration: "4:05",
        },
        {
            title: "Wake-up Call",
            duration: "3:45",
        },
        {
            title: "Automatic love",
            duration: "4:15",
        },
    ];
};

const selectSongReducer = (state = null, { type, payload }) => {
    switch (type) {
        case "SONG_SELECTED":
            return payload;

        default:
            return state;
    }
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer,
});
