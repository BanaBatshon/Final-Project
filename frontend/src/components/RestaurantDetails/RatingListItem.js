import React, { useState } from 'react';
import Rating from 'react-rating'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import EditRatingsModal from './EditRatingModal'

export default ({ rating, index, deleteRatingHandler, editRatingHandler }) => {

  const [modalShow, setModalShow] = useState(false);
  let modalClose = () => setModalShow(false);

  return (
    <div className="row">
      <div className="col-md-12 px-0">

        <div className="list-item bg-white p-3 d-block d-md-flex align-items-center">

          <div className="mb-4 mb-md-0">
            <div className="list-item-header d-flex align-items-center">
              <h2 className="text-black h5">{rating.menuitem.name}</h2>
            </div>
            <div className="badge-wrap">
              <div>
                <Rating
                  initialRating={rating.rating}
                  emptySymbol="ratings-sidebar fa fa-star-o fa-1x"
                  fullSymbol="ratings-sidebar fa fa-star fa-1x"
                  fractions={2}
                  readonly={true}
                />
              </div>
              <span className="bg-primary text-white badge">Pending</span>
            </div>
          </div>

          <div className="my-ratings-actions ml-auto d-flex justify-content-between">
            <ButtonToolbar>
              <Button
                variant="secondary sm"
                onClick={() => setModalShow(true)}
              >
                Edit
            </Button>

              <EditRatingsModal
                show={modalShow}
                onHide={modalClose}
                rating={rating}
                submitEditRating={editRatingHandler}
              />
            </ButtonToolbar>
            <button onClick={() => deleteRatingHandler(rating)} className="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};