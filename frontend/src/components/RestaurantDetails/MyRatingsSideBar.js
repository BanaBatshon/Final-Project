import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux';
import { fetchAllMyRatingsByRestaurant } from '../../actions/index';

class MyRatingsSideBar extends Component {

  componentDidMount() {
    this.props.dispatch(fetchAllMyRatingsByRestaurant(1, 4));
  }

  render() {
    console.log(this.props)
    return (
      <div className="col-lg-4">
        <div className="p-4 mb-3 bg-white">
          <h3 className="h4 text-black mb-3"><strong>My Ratings</strong></h3>
            
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.myRatings.myRatingsByRestaurant
  };
};

export default connect(
  mapStateToProps
)(MyRatingsSideBar);