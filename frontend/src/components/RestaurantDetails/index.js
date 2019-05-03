import React, { Component, Fragment } from 'react';
import Hero from '../Hero';
import MainView from './MainView';
import { connect } from 'react-redux';
import { fetchSingleRestaurant } from '../../actions/index';

class RestaurantDetails extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSingleRestaurant(this.props.location.pathname));
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <MainView />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeRestaurant: state.restaurants.activeRestaurant
  };
};

export default connect(
  mapStateToProps
)(RestaurantDetails);