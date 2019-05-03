import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import { connect } from 'react-redux';
import { fetchSingleRestaurant } from '../../actions/index';

class RestaurantDetails extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSingleRestaurant(this.props.location.pathname));
  }

  render() {
    return (
      <Fragment>
        <MainView restaurant={this.props.activeRestaurant}/>
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