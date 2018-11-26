import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import user from './modules/user';
import todo from './modules/todo';

const reducer = combineReducers({ user, todo });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
