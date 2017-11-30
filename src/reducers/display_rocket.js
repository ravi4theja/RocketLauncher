import { Display_Rocket } from '../actions/index';

export default function(state={}, action) {
  switch(action.type) {
    case Display_Rocket: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}