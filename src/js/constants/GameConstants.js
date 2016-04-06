import keyMirror from 'keymirror';

export default {
    STATE: keyMirror({
        PLAYING: null,
        DEMO: null,
        STOPPED: null
    }),
    ACTIONS: keyMirror({
        PICK_CARD: null,
        NEW_GAME: null,
        START_PLAYING: null
    }),
    RESULT: keyMirror({
        WIN: null,
        LOSE: null,
        PENDING: null
    }),
    DIFFICULTY: [1,2,3,4,5,6,7,8,9],
    CARD_COLORS: {
        GREEN: 1,
        RED: 2,
        BLUE: 3,
        YELLOW: 4
    }
};