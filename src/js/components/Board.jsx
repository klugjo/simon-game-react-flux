
import React from 'react';
import GameActions from '../actions/GameActions';

export default class Board extends React.Component {

    onCardClick(card) {
        GameActions.pickCard(card);
    }

    render() {
        return <div className="board">
            <div className="card green" onClick={() => this.onCardClick(1)}></div>
            <div className="card red" onClick={() => this.onCardClick(2)}></div>
            <div className="card blue" onClick={() => this.onCardClick(3)}></div>
            <div className="card yellow" onClick={() => this.onCardClick(4)}></div>
        </div>;
    }
};