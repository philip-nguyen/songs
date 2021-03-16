import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'So What', duration: '3:25' },
    { title: 'High High', duration: '3:18' },
    { title: 'Butterfly', duration: '4:21' },
    { title: 'Why Not', duration: '3:03' },
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});