
import AppDispatcher from '../dispatcher/AppDispatcher';
import GameConstants from '../constants/GameConstants';

function generateSequence(difficulty) {
    var sequence = [];
    var i = 0;

    difficulty = difficulty || 4;

    for (i; i < difficulty; i = i + 1) {
        sequence.push(Math.floor(Math.random() * (4)) + 1);
    }

    return sequence;
}

export default {

    newGame: (difficulty) => {

        var sequence = generateSequence(difficulty);

        console.log(sequence);

        AppDispatcher.dispatch({
            actionType: GameConstants.ACTIONS.NEW_GAME,
            context: {
                sequence: sequence
            }
        });
    },

    startPlaying: () => {

        AppDispatcher.dispatch({
            actionType: GameConstants.ACTIONS.START_PLAYING
        });
    },

    pickCard: (card) => {
        AppDispatcher.dispatch({
            actionType: GameConstants.ACTIONS.PICK,
            context: {
                card: card
            }
        });
    }
};