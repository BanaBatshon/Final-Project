import React from 'react';
import Tag from './Tag';
import { Link } from 'react-router-dom'

export default ({ restaurant: { name, address, avg_rating, restauranttags, id } }) => {
  return (
    <div className="row">
      <div className="col-md-12">

        <div className="list-item bg-white p-4 d-block d-md-flex align-items-center">
          <div className="thumbnail-wrap">
            <img src="images/thumbnail_1.jpg" alt="" className="list-item-thumbnail" />
          </div>
          <div className="mb-4 mb-md-0 mr-5">
            <div className="list-item-header d-flex align-items-center">
              <h2 className="mr-3 text-black h4"><Link to={`/restaurant/${id}`}>{name}</Link></h2>
              <div className="badge-wrap">
                {restauranttags.map(restaurantTag => {
                  return (
                    <Tag tag={restaurantTag} />
                  );
                })}
              </div>
            </div>
            <div className="list-item-body d-block d-md-flex">
              <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">{address}</a>
              </div>
            </div>
          </div>

          <div className="ml-auto">
            {[...Array(parseInt(avg_rating, 10))].map((e) => {return <span className="fa fa-star checked"></span>})}
            {[...Array(5 - parseInt(avg_rating, 10))].map((e) => {return <span className="fa fa-star"></span>})}
            {/* <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><span
              className="icon-thumbs-up"></span></a>
            <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><span
              className="icon-thumbs-down"></span></a> */}
          </div>
        </div>
      </div>
    </div>
  );
};