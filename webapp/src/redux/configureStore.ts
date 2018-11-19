import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import user from './modules/user';
import test from './modules/test';
import todo from './modules/todo';

const reducer = combineReducers({ user, test, todo });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
