import { FETCH_MY_RATINGS, FETCH_MY_RATINGS_BY_RESTAURANT } from '../actions/types';

const defaultState = {
  user: { id: null },
  myRatings: [],
  myRatingsByRestaurant: []
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_MY_RATINGS:
      return {
        ...state,
        myRatings: action.ratings
      }
    case FETCH_MY_RATINGS_BY_RESTAURANT:
      return {
        ...state,
        myRatingsByRestaurant: action.ratings
      }
    default:
      return state;
  }
}