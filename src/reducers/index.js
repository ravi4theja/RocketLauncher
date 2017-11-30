import { combineReducers } from 'redux';
import RocketsReducer from './reducer_rockets';
import RocketSelectedReducer from './display_rocket';

const rootReducer = combineReducers({
  rockets: RocketsReducer,
  rocketSelected: RocketSelectedReducer
});

export default rootReducer;