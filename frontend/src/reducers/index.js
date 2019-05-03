import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import menuItem from './menuItemReducer';
import fetchNewItems from './fetchNewItemsReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    restaurants: restaurants,
    newItems: menuItem,
    fetchNewItems: fetchNewItems,
    form: formReducer
});