import React, { Component } from 'react';
import Grid from './Grid';

export default class Game extends Component {
    constructor() {
        super();

        this.state = {
            grid: ['','','X','','','','O','','']
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        console.log(index);
    }

    render() {
        return (
            <Grid grid={this.state.grid} onClick={this.handleClick} />
        );
    }
}