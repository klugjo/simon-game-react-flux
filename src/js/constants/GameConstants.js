import keyMirror from 'keymirror';

export default {
    STATE: keyMirror({
        PLAYING: null,
        LOSE: null,
        WIN: null
    }),
    ACTIONS: keyMirror({
        PICK: null
    })
};