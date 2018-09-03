import React, { Component } from 'react';
import Grid from './Grid';

import { connect } from 'react-redux';
import { move } from '../actions';

class Game extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        const { winner, move } = this.props;

        if (winner)
            return;

        move(index);
    }

    goToPrevious(turnNumber) {
        const { move, history } = this.props;

        move(history.slice(0, turnNumber + 1));
    }

    render() {
        const { grid, history, winner } = this.props;

        const moves = history.map((move, index) => (
            <li>
                <a>
                    Move #{index}
                </a>
            </li>)
        );

        return (
            <div className="game">
                <div className="game-board">
                    <Grid grid={grid} onClick={this.handleClick} />
                </div>
                <div className="game-info">
                    <div>{winner}</div>
                    <ol>{moves}</ol>
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
    move: index => dispatch(move(index))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)