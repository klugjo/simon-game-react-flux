import React from 'react';
import Score from './Score.jsx';
import Board from './Board.jsx';

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
        return <div id="main">
            <Score gameState={this.state.gameState} />
            <Board />
        </div>
    }

    _onChange() {
        this.setState(getGameState());
    }
};
