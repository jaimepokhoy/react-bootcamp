import React, { Component } from 'react';
import Grid from './Grid';

export default class Game extends Component {
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
        const { xIsNext, grid, winner } = this.state;

        if (winner)
            return;

        const squares = grid.slice();

        squares[index] = xIsNext ? 'X' : 'O';

        const gameWinner = this.checkWinner(squares);

        this.setState({
            grid: squares,
            xIsNext: !xIsNext,
            winner: gameWinner
        });
    }

    checkWinner(grid) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c])
                return grid[a];
        }

        return null;
    }

    render() {
        return (
            <Grid grid={this.state.grid} onClick={this.handleClick} />
        );
    }
}