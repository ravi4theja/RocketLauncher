import { Fetch_Rockets } from '../actions/index.js';

export default function(state=[], action) {
  switch(action.type) {
    case Fetch_Rockets: {
      return action.payload.data.launches;
    }
    default: {
      return state;
    }
  }
}