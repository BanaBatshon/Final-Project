import React from 'react';
import Tag from './Tag';

export default ({ restaurant: { name, address, restauranttags, id } }) => {
  return (
    <div className="row">
      <div className="col-md-12">

        <div className="list-item bg-white p-4 d-block d-md-flex align-items-center">
          <div className="thumbnail-wrap">
            <img src="images/thumbnail_1.jpg" className="list-item-thumbnail" />
          </div>
          <div className="mb-4 mb-md-0 mr-5">
            <div className="list-item-header d-flex align-items-center">
              <h2 className="mr-3 text-black h4"><a href="details.html">{name}</a></h2>
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
            <span className="p-4">200 Upvotes</span>
            <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><span
              className="icon-thumbs-up"></span></a>
            <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><span
              className="icon-thumbs-down"></span></a>
          </div>
        </div>
      </div>
    </div>
  );
};