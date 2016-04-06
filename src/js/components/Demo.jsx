import React from 'react';

import GameActions from '../actions/GameActions';
import GameConstants from '../constants/GameConstants';
import GameStore from '../stores/GameStore';

export default class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sequence: this.props.sequence};
        this.startDemo();
    }

    startDemo() {

        var i = 0;

        this.demoTimer = window.setInterval(() => {

            this.setState({activeColor: this.state.sequence[i]});

            i = i + 1;

            if(i >= this.state.sequence.length) {
                window.clearInterval(this.demoTimer);
                window.setTimeout(() => GameActions.startPlaying(), 2000);
            }
        }, 1500);
    }

    render() {

        var greenCss = "card green" + (this.state.activeColor === GameConstants.CARD_COLORS.GREEN ? " highlight" : "");
        var redCss = "card red" + (this.state.activeColor === GameConstants.CARD_COLORS.RED ? " highlight" : "");
        var blueCss = "card blue" + (this.state.activeColor === GameConstants.CARD_COLORS.BLUE ? " highlight" : "");
        var yellowCss = "card yellow" + (this.state.activeColor === GameConstants.CARD_COLORS.YELLOW ? " highlight" : "");

        return <div className="board">
            <div className={greenCss}></div>
            <div className={redCss}></div>
            <div className={blueCss}></div>
            <div className={yellowCss}></div>
        </div>;
    }
}

