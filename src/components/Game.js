import React, { Component } from 'react';
import Grid from './Grid';

import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { move } from '../actions';

class Game extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        const { history, move } = this.props;

        if (history.present.winner)
            return;

        move(index);
    }

    render() {
        const { history, goBack, goForward } = this.props;
        const { past, present, future } = history;
        
        const moves = [...past, present, ...future].map((move, index) => (
                    <li key={index}>
                        <a onClick={() => {
                            return index < past.length ? goBack(index) : goForward(index - past.length - 1);
                        }}>
                            Move #{index}
                        </a>
                    </li>
            )
        );

        return (
            <div>
                <h3>{present.winner && "Winner: " + present.winner}</h3>
                <div className="game">
                    <div className="game-board">
                        <Grid grid={present.grid} onClick={this.handleClick} />
                    </div>
                    <div className="game-info">
                        <ul>{moves}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ grid, winner, history }) => ({
    grid,
    winner,
    history
});

const mapDispatchToProps = dispatch => ({
    move: index => dispatch(move(index)),
    goBack: turnNumber => dispatch(UndoActionCreators.jumpToPast(turnNumber)),
    goForward: turnNumber =>  dispatch(UndoActionCreators.jumpToFuture(turnNumber))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)