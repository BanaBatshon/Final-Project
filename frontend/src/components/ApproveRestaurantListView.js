import React, { Fragment } from 'react';
import ApproveRestaurantListItem from '../components/ApproveRestaurantListItem';

const ApproveRestaurantListView = (props) => {
  const { restaurants } = props;

  if (!restaurants.length) {
    return (
      <div>
        No Restaurants
      </div>
    )
  }
  return (
    <Fragment>
      {restaurants.map(restaurant => {
          return (
            <ApproveRestaurantListItem restaurant={restaurant} key={restaurant.id} />
          );
        })}
    </Fragment>
  );
}

export default ApproveRestaurantListView; 


