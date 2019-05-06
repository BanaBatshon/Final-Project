import ApproveRestaurantListView from '../ApproveRestaurantListView';
import React, { Component } from 'react';

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="site-section bg-light">
        <div className="container">
          <div className="row justify-content-start text-left mb-5">
            <div className="col-md-9">
              <h2 className="font-weight-bold text-black">Approve Restaurants</h2>
            </div>
          </div>
          <ApproveRestaurantListView restaurants={restaurants} />
        </div>
      </div>
    );
  }
};

export default MainView;