import React, { Component } from 'react';
import Grid from './Grid';

export default class Game extends Component {
    constructor() {
        super();

        this.state = {
            grid: ['','','X','','','','O','',''],
            xIsNext: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        const { xIsNext, grid } = this.state;
        const squares = grid.slice();

        squares[index] = xIsNext ? 'X' : 'O';

        this.setState({
            grid: squares,
            xIsNext: !xIsNext
        });
    }

    render() {
        return (
            <Grid grid={this.state.grid} onClick={this.handleClick} />
        );
    }
}