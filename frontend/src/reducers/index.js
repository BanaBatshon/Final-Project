import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import newRestaurant from 'redux-form';

export default combineReducers({
    restaurants: restaurants,
    newRestaurant: newRestaurant
});