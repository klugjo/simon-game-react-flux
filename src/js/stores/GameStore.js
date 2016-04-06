import AppDispatcher from '../dispatcher/AppDispatcher';
import events from 'events';
import GameConstants from '../constants/GameConstants';

var EventEmitter = events.EventEmitter;

var CHANGE_EVENT = 'change';

var _state = {
    sequence: [],
    gameState: GameConstants.STATE.STOPPED,
    result: GameConstants.RESULT.PENDING
};

function pick(card) {

    if(_state.gameState !== GameConstants.STATE.PLAYING) { return; }

    if(_state.sequence.length && _state.sequence[0] === card) {
        _state.sequence.shift();
        if(_state.sequence.length < 1) {
            _state.gameState = GameConstants.STATE.STOPPED;
            _state.result = GameConstants.RESULT.WIN;
        }
    } else {
        _state.gameState = GameConstants.STATE.STOPPED;
        _state.result = GameConstants.RESULT.LOSE;
    }
}

function resetGame(sequence) {

    _state = {
        sequence: sequence,
        gameState: GameConstants.STATE.DEMO
    };
    console.log(_state);
}

function startPlaying() {

    _state.gameState = GameConstants.STATE.PLAYING;
}

var GameStore = Object.assign({}, EventEmitter.prototype, {

    getState: function() {
        return _state;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register((action) => {

    switch(action.actionType) {

        case GameConstants.ACTIONS.PICK:
            pick(action.context.card);
            GameStore.emitChange();
            break;

        case GameConstants.ACTIONS.NEW_GAME:
            resetGame(action.context.sequence);
            GameStore.emitChange();
            break;

        case GameConstants.ACTIONS.START_PLAYING:
            startPlaying();
            GameStore.emitChange();
            break;

        default:
            // Nope
    }
});

export default GameStore;
