import { FETCH_MY_RATINGS } from '../actions/types';

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
    default:
      return state;
  }
}