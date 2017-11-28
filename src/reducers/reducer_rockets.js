import { Fetch_Rockets } from '../actions/index.js';
import _ from 'lodash';

export default function(state=[], action) {
  switch(action.type) {
    case Fetch_Rockets: {
      console.log(action.payload);
      return action.payload.data.launches;
    }
    default: {
      return state;
    }
  }
}