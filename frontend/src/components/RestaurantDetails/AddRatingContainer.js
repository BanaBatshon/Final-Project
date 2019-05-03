import React, { Component } from 'react';
import AutoSuggest from './AutoSuggest'

class AddRatingContainer extends Component {
  render() {
    return (
      <div className="row col-md-12">
        <div className="col-md-9 px-0 pb-4" data-aos="fade">
          <h2 className="font-weight-bold text-black">Add Rating</h2>
        </div>
        <div className="row col-md-12 px-0">
          <form className="col-md-12 py-4">
            <div className="input-group">
              <AutoSuggest />
            </div>
          </form>
        </div>

        <div className="row d-flex w-100 p-4 justify-content-center">

          <div className="my-auto">
            <h4 className="font-weight-bold text-black">Your Rating: </h4>
          </div>

          <div>
            <a href="#" className="btn ratings-action"><span className="icon-star"></span></a>
            <a href="#" className="btn ratings-action"><span className="icon-star"></span></a>
            <a href="#" className="btn ratings-action"><span className="icon-star"></span></a>
            <a href="#" className="btn ratings-action"><span className="icon-star"></span></a>
            <a href="#" className="btn ratings-action"><span className="icon-star"></span></a>
          </div>


        </div>

        <div className="row d-flex w-100 p-4 justify-content-center">
          <p><a href="#" className="btn btn-primary  py-2 px-4 rounded-0">Submit</a></p>
        </div>
      </div>
    );
  }
}

export default AddRatingContainer;