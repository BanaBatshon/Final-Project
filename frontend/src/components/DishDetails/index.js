import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import { connect } from 'react-redux';
import { fetchSingleDish } from '../../actions/index';

class DishDetails extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSingleDish(this.props.location.pathname));
  }

  render() {
    return (
      <Fragment>
        <MainView />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeDish: state.dishes.activeDish
  };
};

export default connect(
  mapStateToProps
)(DishDetails);