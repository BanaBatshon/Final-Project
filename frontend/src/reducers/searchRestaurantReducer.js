import { SHOW_RESULTS } from '../actions/types';

export default function restaurantReducer(state = [], action) {
  switch (action.type) {
    case SHOW_RESULTS:
      return action.results;
    default:
      return state;
  }
}