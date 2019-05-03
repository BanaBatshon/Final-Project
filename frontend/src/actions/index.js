import { FETCH_RESTAURANTS, NEW_ITEM_ADDED, FETCH_NEW_ITEMS, SEND_NEW_ITEM_LIST } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/restaurants';
const newItemListUrl = 'http://localhost:3001/items';

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

export const fetchNewItems = (newItems) => {
  return {
    type: FETCH_NEW_ITEMS,
    newItems
  }
};