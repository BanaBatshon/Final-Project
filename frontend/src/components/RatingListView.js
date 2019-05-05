import React, { Fragment } from 'react';
import RatingListItem from './RatingListItem';

const RatingListView = (props) => {
  const { myRatings } = props;
  if (!myRatings.length) {
    return (
      <div>
        No Ratings
      </div>
    )
  }
  return (
    <Fragment>
      {myRatings.map(rating => {
          return (
            <RatingListItem rating={rating.menuitem} key={rating.id} />
          );
        })}
    </Fragment>
  );
}

export default RatingListView; 


