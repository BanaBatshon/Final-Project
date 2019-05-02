import { FETCH_RESTAURANTS, FETCH_RESTAURANT } from '../actions/types';

const defaultState = {
  activeRestaurant: {
  },
  restaurants: [],
}

export default function restaurantReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
      }
    case FETCH_RESTAURANT:
      return {
        ...state,
        activeRestaurant: action.restaurant
      }
    default:
      return state;
  }
}