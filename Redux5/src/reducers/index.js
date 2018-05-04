import { combineReducers } from 'redux';
import {todo} from './reducer_todo';

const rootReducer = combineReducers({
  todos : todo
});

export default rootReducer;