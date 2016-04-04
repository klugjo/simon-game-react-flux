
import AppDispatcher from '../dispatcher/AppDispatcher';
import GameConstants from '../constants/GameConstants';

export default {

    pickCard: (card) => {
        AppDispatcher.dispatch({
            actionType: GameConstants.ACTIONS.PICK,
            context: {
                card: card
            }
        });
    }
};