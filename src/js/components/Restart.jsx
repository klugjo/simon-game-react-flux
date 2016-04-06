import React from 'react';
import GameActions from '../actions/GameActions';
import GameConstants from '../constants/GameConstants';

function startNewGame() {
    GameActions.newGame();
}

export default class Restart extends React.Component {

    render() {
        return <div>
            {GameConstants.DIFFICULTY.forEach(val =>
                <input type="radio" name={val} value={val}>{val}</input>
            )}
            <br />
            <button onClick={() => startNewGame()}>Restart</button>
        </div>;
    }
}