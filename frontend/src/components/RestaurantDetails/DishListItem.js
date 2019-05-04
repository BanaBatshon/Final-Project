import React from 'react';

export default ({ dish: { name, menuitemratings }, index}) => {
  return (
    <div className="row">
      <div className="col-md-12 px-0">

        <div className="list-item bg-white p-3 d-block d-md-flex align-items-center">

          <div className="mb-4 mb-md-0 mr-5">
            <div className="list-item-header d-flex align-items-center">
              <h2 className="mr-3 text-black h4"><strong>{index != null ? `${index + 1}.` : ''} </strong>{ name }</h2>
              <div className="badge-wrap">
                <span className="bg-primary text-white badge py-2 px-4">Pizza</span>
                <span className="bg-primary text-white badge py-2 px-4">Italian</span>
              </div>
            </div>
          </div>

          <div className="ml-auto">
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span>{menuitemratings} Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};