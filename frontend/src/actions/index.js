import { FETCH_RESTAURANTS, SHOW_RESULTS, FETCH_RESTAURANT } from './types';
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

export const fetchRestaurant = (restaurant) => {
  return {
    type: FETCH_RESTAURANT,
    restaurant
  }
};

export const fetchSingleRestaurant = (url) => {
  return (dispatch) => {
    return axios.get('http://localhost:3001' + url)
      .then(response => {
        dispatch(fetchRestaurant(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};


export const fetchSearchRestaurants = (results) => {
  return {
    type: SHOW_RESULTS,
    results
  }
};

export const fetchAllSearchRestaurants = (query) => {
  return (dispatch) => {
    return axios.get(apiUrl + '/' + query)
      .then(response => {
        dispatch(fetchSearchRestaurants(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};