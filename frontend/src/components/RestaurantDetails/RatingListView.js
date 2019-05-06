import React, { Component, Fragment } from 'react';
import RatingListItem from './RatingListItem';
import { deleteRating } from '../../actions/index'
import { connect } from 'react-redux';

class RatingListView extends Component {

  deleteRatingHandler = (rating) => {
    console.log(rating);
    this.props.dispatch(deleteRating(1, rating.menuitemId, rating.menuitem.restaurantId))
  }

  render() {
    console.log(this.props);
    const { ratings } = this.props;

    if (!ratings.length) {
      return (
        <div>
          No ratings
      </div>
      )
    }
    return (
      <Fragment>
        {ratings.map((rating, index) => {
          return (
            <RatingListItem deleteRatingHandler={this.deleteRatingHandler} rating={rating} key={rating.id} index={index} />
          );
        })}
      </Fragment>
    );
  }
}

export default connect()(RatingListView);