import React from 'react';
import Tag from './Tag';
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

export default ({ dish: { name, restaurantId, avg_rating, menuitemtags, restaurant } }) => {
  return (
    <div className="row">
      <div className="col-md-12">

        <div className="list-item bg-white p-4 d-block d-md-flex align-items-center">
          <div className="thumbnail-wrap">
            <img src="images/thumbnail_1.jpg" alt="" className="list-item-thumbnail" />
          </div>
          <div className="mb-4 mb-md-0 mr-5">
            <div className="list-item-header d-flex align-items-center">
              <h2 className="mr-3 text-black h4"><Link to={`/restaurant/${restaurantId}`}>{name}</Link></h2>
              <div className="badge-wrap">
                {menuitemtags.map(dishTag => {
                  return (
                    <Tag tag={dishTag} />
                  );
                })}
              </div>
            </div>
            <div className="list-item-body d-block d-md-flex">
              <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">{restaurant}</a>
              </div>
            </div>
          </div>

          <div className="ml-auto">
          <Rating
                readonly={true}
                initialRating={parseFloat(avg_rating)}
                fullSymbol="fa fa-star fa-2x"
                emptySymbol="fa fa-star-o fa-2x"
                fractions={2}
              />
          </div>
        </div>
      </div>
    </div>
  );
};