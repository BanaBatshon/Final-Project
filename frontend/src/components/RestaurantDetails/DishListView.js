import React, { Fragment } from 'react';
import DishListItem from './DishListItem';

const DishListView = (props) => {
  const { dishes } = props;

  if (!dishes.length) {
    return (
      <div>
        No Dishes
      </div>
    )
  }
  return (
    <Fragment>
      {dishes.map((dish, index) => {
          return (
            <DishListItem dish={dish} key={dish.id} index={index}/>
          );
        })}
    </Fragment>
  );
}

export default DishListView; 