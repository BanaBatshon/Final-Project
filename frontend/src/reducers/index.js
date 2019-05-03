import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import results from './searchRestaurantReducer'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    restaurants: restaurants,
    form: formReducer,
    results: results
});