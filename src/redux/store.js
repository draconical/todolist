import { createStore, combineReducers } from 'redux';
import tasksReducer from './tasksReducer';

let reducers = combineReducers({
    tasks: tasksReducer
});

let store = createStore(reducers);

window.store = store;

export default store;