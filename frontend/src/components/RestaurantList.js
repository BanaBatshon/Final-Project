import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Restaurant from '../components/Restaurant';

const RestaurantList = ({ restaurants }) => {
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
            <Restaurant restaurant={restaurant} key={restaurant.id} />
          );
        })}

    </Fragment>
  );
}
const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

export default connect(
  mapStateToProps
)(RestaurantList);

