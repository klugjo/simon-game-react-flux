
import React from 'react';
import GameActions from '../actions/GameActions';
import GameConstants from '../constants/GameConstants';

function onCardClick(card) {
    GameActions.pickCard(card);
}

export default class Board extends React.Component {
    render() {
        return <div className="board">
            <div className="card green" onClick={() => onCardClick(GameConstants.CARD_COLORS.GREEN)}></div>
            <div className="card red" onClick={() => onCardClick(GameConstants.CARD_COLORS.RED)}></div>
            <div className="card blue" onClick={() => onCardClick(GameConstants.CARD_COLORS.BLUE)}></div>
            <div className="card yellow" onClick={() => onCardClick(GameConstants.CARD_COLORS.YELLOW)}></div>
        </div>;
    }
};