import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import newRestaurant from './newRestaurantReducer';

export default combineReducers({
    restaurants: restaurants,
    newRestaurant: newRestaurant
});