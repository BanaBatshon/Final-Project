import RestaurantList from '../RestaurantList';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">

        <li className="nav-item">
          <a
            href=""
            className="nav-link active">
            Global Feed
          </a>
        </li>

        </ul>
      </div>

      <RestaurantList
        restaurants={props.restaurants} />
    </div>
  );
};

export default connect(mapStateToProps, () => ({}))(MainView);