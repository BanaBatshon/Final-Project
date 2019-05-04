import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import myRatings from './userReducer';
import dishes from './dishReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    restaurants: restaurants,
    myRatings: myRatings,
    dishes: dishes,
    form: formReducer
});