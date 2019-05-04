import React, { Fragment } from 'react';
import RatingListItem from './RatingListItem';

const RatingListView = (props) => {
  const { ratings } = props;

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
            <RatingListItem rating={rating} key={rating.id} index={index}/>
          );
        })}
    </Fragment>
  );
}

export default RatingListView; 