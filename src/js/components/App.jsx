import React from 'react';
import Score from './Score.jsx';
import Board from './Board.jsx';
import Demo from './Demo.jsx';
import Restart from './Restart.jsx';

import GameConstants from '../constants/GameConstants';
import GameStore from '../stores/GameStore';

function getGameState() {
    return {
        gameState: GameStore.getState()
    }
}

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = getGameState();
    }

    componentDidMount() {
        GameStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        GameStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {

        var mainScreen;

        console.log("this.state.gameState.gameState: " + this.state.gameState.gameState);

        switch(this.state.gameState.gameState) {
            case GameConstants.STATE.DEMO:
                mainScreen = <Demo sequence={this.state.gameState.sequence}/>;
                break;
            case GameConstants.STATE.PLAYING:
                mainScreen = <Board />;
                break;
            case GameConstants.STATE.STOPPED:
                mainScreen = <Restart />;
                break;
            default:
                break;
        }

        return <div id="main">
            <Score gameState = { this.state.gameState } />
            { mainScreen }
        </div>
    }

    _onChange() {
        this.setState(getGameState());
    }
};
