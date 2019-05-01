import React from 'react';
import { connect } from 'react-redux';
import Restaurant from '../components/Restaurant';

function RestaurantList({ restaurants }) {
  if (!restaurants.length) {
    return (
      <div>
        No Restaurants
      </div>
    )
  }
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-start text-left mb-5">
          <div className="col-md-9">
            <h2 className="font-weight-bold text-black">Discover Restaurants</h2>
          </div>
        </div>

        {restaurants.map(restaurant => {
          return (
            <Restaurant restaurant={restaurant} key={restaurant.id} />
          );
        })}
      </div>
    </div>
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