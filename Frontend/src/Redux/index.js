import { applyMiddleware, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducer';

const store = (initialState = {}) =>
    createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;