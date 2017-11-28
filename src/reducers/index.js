import { combineReducers } from 'redux';
import RocketsReducer from './reducer_rockets';

const rootReducer = combineReducers({
  rockets: RocketsReducer
});

export default rootReducer;