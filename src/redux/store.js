import { createStore, combineReducers, applyMiddleware } from 'redux';
import tasksReducer from './tasksReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    tasks: tasksReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;