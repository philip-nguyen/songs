// WHY name this file index?
/** Because when importing, (webpack) can interpret
 * import actions from '../actions'; as
 * import actions from '../actions/index';
 */

// Action Creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
