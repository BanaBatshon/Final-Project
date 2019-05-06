import ApproveRestaurantListView from '../ApproveRestaurantListView';
import React, { Component } from 'react';
import axios from 'axios';
const apiUrl = 'http://localhost:3001';

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {restaurants: []};
  }
  
  componentDidMount() {
    return axios.get(`${apiUrl}/unapprovedrestaurants`)
      .then(response => {
        this.setState({restaurants: response.data})
      })
      .catch(error => {
        throw (error);
      });
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
          <ApproveRestaurantListView restaurants={this.state.restaurants} />
        </div>
      </div>
    );
  }
};

export default MainView;