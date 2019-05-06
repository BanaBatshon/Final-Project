import React from 'react';
import Rating from 'react-rating'

const Summary = (props) => {
  const { details } = props;

  return (

    <div className="row justify-content-start text-left mb-2 p-4">
      <div className="d-block d-md-flex align-items-center w-100 pb-4">
        <div className="mb-4 mb-md-0 mr-5">
          <div className="d-flex align-items-center">
            <h1 className="mr-3 pb-3 text-black h2">{details.name}</h1>
          </div>
          <div className="list-item-body d-block d-md-flex">
            <div className="badge-wrap">
            </div>
          </div>
        </div>

        <div className="ml-auto">
          <Rating
            initialRating={details.avg_rating}
            emptySymbol="ratings-sidebar fa fa-star-o fa-1x"
            fullSymbol="ratings-sidebar fa fa-star fa-1x"
            fractions={2}
            readonly={true}
          />
          <span class="num-ratings">{details.numRatings}</span>
        </div>
      </div>
      <div className="row col-md-12 pb-4">
        <p>
          {details.description}
        </p>
      </div>
    </div>
  )
}

export default Summary;