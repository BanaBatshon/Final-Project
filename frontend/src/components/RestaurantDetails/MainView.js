import React from 'react';
import Summary from './Summary';
import DishListView from './DishListView';
import AddRatingContainer from './AddRatingContainer';

const MainView = (props) => {
  const { restaurant } = props;

  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="bg-white col-md-12 col-lg-8 mb-5">
            <Summary details={restaurant} />
            <div className="container p-0 pb-5">
              <div className="row justify-content-start text-left"></div>
              <div className="col-md-9 px-0 pb-4" data-aos="fade">
                <h2 className="font-weight-bold text-black">Top Dishes</h2>
              </div>
              {/* {restaurant && restaurant.menuitems && <DishListView dishes={restaurant.menuitems} />} */}
              <DishListView dishes={restaurant.menuitems} />
            </div>
            <AddRatingContainer />
          </div>
        </div>
      </div>
    </div>

  );
};

export default MainView;