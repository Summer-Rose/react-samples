//Action creator
export const selectSong = (song) => {
  //return Action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

//named exports allow us to export\
//multiple functions from one file
