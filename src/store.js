import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const defaultState = {
    grid: ['', '', '', '', '', '', '', '', ''],
    xIsNext: true,
    winner: false
};

export default function configureStore(initialState = defaultState) {
    return createStore(
        reducer,
        applyMiddleware(thunk)
    );
}