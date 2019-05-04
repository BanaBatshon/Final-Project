import React from 'react';

export default ({ rating, index }) => {
  return (
    <div className="row">
      <div className="col-md-12 px-0">

        <div className="list-item bg-white p-3 d-block d-md-flex align-items-center">

          <div className="mb-4 mb-md-0">
            <div className="list-item-header d-flex align-items-center">
              <h2 className="text-black h5">Margherita</h2>
            </div>
            <div className="badge-wrap">
              <div>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
              </div>
              <span className="bg-primary text-white badge">Pending</span>
            </div>
          </div>

          <div className="my-ratings-actions ml-auto d-flex justify-content-between">
            <a href="#" className="btn btn-secondary btn-sm">Edit</a>
            <a href="#" className="btn btn-danger btn-sm">Delete</a>
          </div>
        </div>
      </div>
    </div>
  );
};