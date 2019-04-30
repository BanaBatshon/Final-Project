import React from 'react';

const RestaurantPreview = props => {
  const restaurant = props.restaurant;

  return (
    <div className="article-preview">
      <p>
        {restaurant.name}
      </p>
    </div>
  );
}

export default RestaurantPreview;