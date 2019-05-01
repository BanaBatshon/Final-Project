import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    restaurants: restaurants,
    form: formReducer
});