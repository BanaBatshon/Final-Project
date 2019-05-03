import React, { Fragment } from 'react';
import DishListItem from '../components/DishListItem';

const DishListView = (props) => {
  const { dishes } = props;
  console.log(dishes)
  if (!dishes.length) {
    return (
      <div>
        No Dishes
      </div>
    )
  }
  return (
    <Fragment>
      {dishes.map(dish => {
          return (
            <DishListItem dish={dish} key={dish.id} />
          );
        })}
    </Fragment>
  );
}

export default DishListView; 


