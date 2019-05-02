import { FETCH_RESTAURANTS, NEW_ITEM_ADDED } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/restaurants';

export const fetchRestaurants = (restaurants) => {
  return {
    type: FETCH_RESTAURANTS,
    restaurants
  }
};

export const fetchAllRestaurants = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchRestaurants(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const addNewItemToNewItemList = (menuItem) => {
  return {
    type: NEW_ITEM_ADDED,
    menuItem
  }
};