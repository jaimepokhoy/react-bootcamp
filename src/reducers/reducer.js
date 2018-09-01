const defaultState = {
    grid: ['', '', '', '', '', '', '', '', ''],
    history: [],
    xIsNext: true,
    winner: false
};

const checkWinner = grid => {
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

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'MOVE':
            const { xIsNext, grid, history } = state;

            const newGrid = grid;
            newGrid[action.index] = xIsNext ? 'X' : 'O';

            return Object.assign({}, state, {
                grid: newGrid,
                xIsNext: !xIsNext,
                history: [...history, grid],
                winner: checkWinner(newGrid)
            });

        default:
            return state;
    }
}