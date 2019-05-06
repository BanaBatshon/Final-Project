import React from 'react';
import Rating from 'react-rating'

export default ({ dish: { name, menuitemratings, numRatings }, index }) => {
  return (
    <div className="row">
      <div className="col-md-12 px-0">

        <div className="list-item bg-white p-3 d-block d-md-flex align-items-center">

          <div className="mb-4 mb-md-0 mr-5">
            <div className="list-item-header d-flex align-items-center">
              <h2 className="mr-3 text-black h4"><strong>{index != null ? `${index + 1}.` : ''} </strong>{name}</h2>
              <div className="badge-wrap">
                <span className="bg-primary text-white badge py-2 px-4">Pizza</span>
                <span className="bg-primary text-white badge py-2 px-4">Italian</span>
              </div>
            </div>
          </div>

          <div className="ml-auto">
            <Rating
              initialRating={menuitemratings}
              emptySymbol="ratings-sidebar fa fa-star-o fa-1x"
              fullSymbol="ratings-sidebar fa fa-star fa-1x"
              fractions={2}
              readonly={true}
            />
            <span className="num-ratings">{numRatings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};