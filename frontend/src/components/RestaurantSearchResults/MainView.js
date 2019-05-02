import RestaurantList from '../RestaurantList';
import React from 'react';

const MainView = () => {
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-start text-left mb-5">
          <div className="col-md-9">
            <h2 className="font-weight-bold text-black">Restaurants Results</h2>
          </div>
        </div>
        <RestaurantList />
      </div>
    </div>
  );
};

export default MainView;