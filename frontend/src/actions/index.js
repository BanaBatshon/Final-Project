import { FETCH_RESTAURANTS, FETCH_RESTAURANT_SEARCH_RESULTS, FETCH_RESTAURANT, 
  FETCH_DISHES, FETCH_DISH_SEARCH_RESULTS, FETCH_MY_RATINGS, FETCH_MY_RATINGS_BY_RESTAURANT, ADD_RATING } from './types';
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

export const fetchDishes = (dishes) => {
  return {
    type: FETCH_DISHES,
    dishes
  }
};

export const fetchAllDishes = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/items`)
      .then(response => {
        dispatch(fetchDishes(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

  export const fetchSearchDishes = (searchResults) => {
    return {
      type: FETCH_DISH_SEARCH_RESULTS,
      searchResults
    }
  };
  
  export const fetchAllSearchDishes = (query) => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/items/${query}`)
        .then(response => {
          dispatch(fetchSearchDishes(response.data))
        })
        .catch(error => {
          throw (error);
        });
    };
  };

  export const fetchMyRatings = (ratings) => {
    return {
      type: FETCH_MY_RATINGS,
      ratings
    }
  };
  
  export const fetchAllMyRatings = (id) => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/users/${id}/ratings`)
        .then(response => {
          dispatch(fetchMyRatings(response.data))
        })
        .catch(error => {
          throw (error);
        });
    };
  };

  export const fetchMyRatingsByRestaurant = (ratings = []) => {
    return {
      type: FETCH_MY_RATINGS_BY_RESTAURANT,
      ratings
    }
  }

  export const fetchAllMyRatingsByRestaurant = (userId, restaurantId) => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/users/${userId}/restaurant/${restaurantId}`)
        .then(response => {
          dispatch(fetchMyRatingsByRestaurant(response.data))
        })
        .catch(error => {
          throw (error);
        });
    };
  }

  export const createRatingSuccess =  (data) => {
    return {
      type: ADD_RATING,
      data
    }
  };

  export const createdRating = ({userId, menuitemId, rating, restaurantId}) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/users/${userId}/ratings`, {userId, menuitemId, rating})
        .then(response => {
          dispatch(createRatingSuccess(response.data))
          dispatch(fetchAllMyRatingsByRestaurant(userId, restaurantId));
        })
        .catch(error => {
          throw(error);
        });
    };
  };