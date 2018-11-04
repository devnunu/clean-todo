import { createStore, combineReducers, applyMiddleware } from 'redux';

// reducers
import userReducer from './modules/user';

const reducer = combineReducers({ userReducer });

const store = createStore(reducer);

export default store;
