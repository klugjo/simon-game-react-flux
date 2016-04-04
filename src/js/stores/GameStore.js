import AppDispatcher from '../dispatcher/AppDispatcher';
import events from 'events';
import GameConstants from '../constants/GameConstants';

var EventEmitter = events.EventEmitter;

var CHANGE_EVENT = 'change';

var _state = {
    "sequence": [1,2,3,4],
    "gameState": GameConstants.STATE.PLAYING
};

function pick(card) {

    if(_state.gameState !== GameConstants.STATE.PLAYING) { return; }

    if(_state.sequence.length && _state.sequence[0] === card) {
        _state.sequence.shift();
        if(_state.sequence.length < 1) {
            _state.gameState = GameConstants.STATE.WIN;
        }
    } else {
        _state.gameState = GameConstants.STATE.LOSE;
        _state.sequence = [1,2,3,4];
    }
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

        default:
            // Nope
    }
});

export default GameStore;