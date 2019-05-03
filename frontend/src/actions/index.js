import { FETCH_RESTAURANTS, FETCH_RESTAURANT_SEARCH_RESULTS, FETCH_RESTAURANT } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const fetchRestaurants = (restaurants) => {
  return {
    type: FETCH_RESTAURANTS,
    restaurants
  }
};

export const fetchAllRestaurants = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/restaurants`)
      .then(response => {
        dispatch(fetchRestaurants(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const fetchRestaurant = (restaurant) => {
  return {
    type: FETCH_RESTAURANT,
    restaurant
  }
};

export const fetchSingleRestaurant = (url) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}${url}`)
      .then(response => {
        dispatch(fetchRestaurant(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};


export const fetchSearchRestaurants = (searchResults) => {
  return {
    type: FETCH_RESTAURANT_SEARCH_RESULTS,
    searchResults
  }
};

export const fetchAllSearchRestaurants = (query) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/restaurants/${query}`)
      .then(response => {
        dispatch(fetchSearchRestaurants(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};