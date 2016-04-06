
import React from 'react';
import GameActions from '../actions/GameActions';
import GameConstants from '../constants/GameConstants';

export default class Score extends React.Component{

    _getGameState() {

        console.log(this.props.gameState);

        if (this.props.gameState.result === GameConstants.RESULT.WIN) {
            return "Congratulations, you won !";
        } else if (this.props.gameState.result === GameConstants.RESULT.LOSE) {
            return "You lost, try again";
        } else {
            return "";
        }
    }

    render() {
        return <div className="score">
            <label className="game-state">{this._getGameState()}</label>
        </div>;
    }
};