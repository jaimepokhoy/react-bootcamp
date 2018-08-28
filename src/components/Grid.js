import React, { Component } from 'react';
import Square from './Square';

export default class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: this.props.grid
        }

        this.renderSquare = this.renderSquare.bind(this);
    }

    renderSquare(index) {
        return (
            <Square onClick={() => this.props.onClick(index)} value={this.state.squares[index]} />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}                    
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}