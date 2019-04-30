import React from 'react';

const RestaurantList = props => {
  if (!props.restaurants) {
    return (
      <div className="restaurant-preview">Loading...</div>
    );
  }

  if (props.restaurants.length === 0) {
    return (
      <div className="restaurant-preview">
        No restaurants are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.restaurants.map(restaurant => {
          return (
            <h2>{restaurant.title}</h2>
          );
        })
      }
    </div>
  );
};

export default RestaurantList;