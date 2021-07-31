import { combineReducers } from 'redux';

const songsReducer = () => {
  // return static list of songs
  return [
    { title: 'Hello', duration: '4:05' },
    { title: 'Macarena', duration: '2:35' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I don\'t want it that way', duration: '4:20' },
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if ( action.type === 'SONG_SELECTED' ) return action.payload;
  
  // just select currently selected song
  return selectedSong;
}

// Wiring the reducers together

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});