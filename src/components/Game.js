import React, { Component } from 'react';
import Grid from './Grid';

import { connect } from 'react-redux';
import { move } from '../actions';

class Game extends Component {
    constructor() {
        super();

        this.state = {
            grid: ['','','','','','','','',''],
            xIsNext: true,
            winner: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        const { winner, grid, move } = this.props;

        if (winner)
            return;

        move(index);

        this.setState({
            grid
        });
    }

    render() {
        return (
            <div className="game">
                <Grid class grid={this.state.grid} onClick={this.handleClick} />
            </div>
        );
    }
}

const mapStateToProps = ({grid, winner}) => ({
    grid,
    winner
});

const mapDispatchToProps = dispatch => ({
    move: index => dispatch(move(index))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)