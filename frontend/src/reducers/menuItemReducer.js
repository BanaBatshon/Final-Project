import { NEW_ITEM_ADDED } from '../actions/types';

const initialState = {
  menuItem: []
}
export default function menuItemReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_ITEM_ADDED:
      state.menuItem.push(action.menuItem)
    return {
      ...state,
      menuItem: state.menuItem
    }
    default:
      return state;
  }
}