import RestaurantListView from '../RestaurantListView';
import React from 'react';
import { connect } from 'react-redux';

const MainView = (restaurants) => {
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-start text-left mb-5">
          <div className="col-md-9">
            <h2 className="font-weight-bold text-black">Search Results</h2>
          </div>
        </div>
        <RestaurantListView restaurants={restaurants.restaurants} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.results
  };
};

export default connect(
  mapStateToProps
)(MainView);