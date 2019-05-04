import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import dishes from './dishReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    restaurants: restaurants,
    dishes: dishes,
    form: formReducer
});