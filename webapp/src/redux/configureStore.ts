import { createStore, combineReducers, applyMiddleware } from 'redux';

// reducers
import user from './modules/user';
import test from './modules/test';

const reducer = combineReducers({ user, test });

const store = createStore(reducer);

export default store;
