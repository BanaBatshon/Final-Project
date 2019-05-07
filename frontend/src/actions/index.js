import { FETCH_RESTAURANTS, NEW_ITEM_ADDED, FETCH_NEW_ITEMS, ADD_RATING, DELETE_RATING, EDIT_RATING } from './types';
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

export const fetchNewItems = (newItems) => {
  return {
    type: FETCH_NEW_ITEMS,
    newItems
  }
};

export const createRatingSuccess = (data) => {
  return {
    type: ADD_RATING,
    data
  }
};

export const createdRating = ({ userId, menuitemId, rating, restaurantId }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/users/${userId}/ratings`, { userId, menuitemId, rating })
      .then(response => {
        dispatch(createRatingSuccess(response.data))
        dispatch(fetchAllMyRatingsByRestaurant(userId, restaurantId));
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const deleteRatingSuccess = id => {
  return {
    type: DELETE_RATING,
    id
  }
}

export const deleteRating = (userId, id, restaurantId) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/users/${id}/ratings`)
      .then(response => {
        dispatch(deleteRatingSuccess(response.data))
        dispatch(fetchAllMyRatingsByRestaurant(userId, restaurantId))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const editRatingSuccess = id => {
  return {
    type: EDIT_RATING,
    id
  }
}

// userid not used anymore
export const editRating = ({ userid, id, rating, restaurantId }) => {
  return (dispatch) => {
    return axios.patch(`${apiUrl}/users/${id}/ratings`, { rating })
      .then(response => {
        dispatch(editRatingSuccess(response.data))
        dispatch(fetchAllMyRatingsByRestaurant(userid, restaurantId))
      })
      .catch(error => {
        throw (error);
      });
  };
};
