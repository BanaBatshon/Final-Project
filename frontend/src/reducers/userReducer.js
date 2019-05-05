import { FETCH_MY_RATINGS, LOGIN } from '../actions/types';

const defaultState = {
  user: { id: null },
  myRatings: []
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_MY_RATINGS:
      return {
        ...state,
        myRatings: action.ratings,
      }
    case LOGIN:
    return {
      ...state,
      user: action.user
    }
    default:
      return state;
  }
}