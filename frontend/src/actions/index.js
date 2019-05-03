import { FETCH_RESTAURANTS, NEW_ITEM_ADDED, FETCH_NEW_ITEMS, SEND_NEW_ITEM_LIST } from './types';
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

export const postNewItemListToServer = (newItems) => {
  return {
    type: SEND_NEW_ITEM_LIST,
    newItems
  }
}

export const fetchNewItems = (newItems) => {
  return {
    type: FETCH_NEW_ITEMS,
    newItems
  }
};