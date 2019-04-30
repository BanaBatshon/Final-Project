import RestaurantPreview from './RestaurantPreview';
import React from 'react';

const RestaurantList = props => {
  if (!props.restaurants) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.restaurants.length === 0) {
    return (
      <div className="article-preview">
        No restaurants are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.restaurants.map(restaurant => {
          return (
            <RestaurantPreview restaurant={restaurant} key={restaurant.id} />
          );
        })
      }
    </div>
  );
};

export default RestaurantList;