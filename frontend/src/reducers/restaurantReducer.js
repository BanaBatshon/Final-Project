import { FETCH_RESTAURANTS } from '../actions/types';

export default function restaurantReducer(state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
}