import React from 'react';

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
          <span className="p-4">200 Upvotes</span>
          <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><span
            className="icon-thumbs-up"></span></a>
          <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><span
            className="icon-thumbs-down"></span></a>
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