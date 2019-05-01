export default function newRestaurantReducer(state = [], action) {
  switch (action.type) {
    case CREATE_NEW_RESTAURANT:
      return action.newRestaurant;
    default:
      return state;
  }
}