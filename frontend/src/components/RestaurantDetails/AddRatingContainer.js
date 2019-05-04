import React, { Component } from 'react';
import AutoSuggest from './AutoSuggest'
import DishListItem from './DishListItem'
import Rating from 'react-rating'

class AddRatingContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishToRate: {},
      value: 0
    }
  }

  getSelection = (selectedDish) => {
    this.setState({ dishToRate: selectedDish })
  }

  handleClick = (event) => {
    this.setState({ value: undefined });
  }

  render() {

    if (Object.keys(this.state.dishToRate).length !== 0) {
      return (
        <div className="row col-md-12">
          <div className="col-md-9 px-0 pb-4" data-aos="fade">
            <h2 className="font-weight-bold text-black">Add Rating</h2>
          </div>
          <div className="row col-md-12 px-0">
            <form className="col-md-12 py-4">
              <div className="input-group">
                <AutoSuggest restaurant={this.props.restaurant} selection={this.getSelection} />
              </div>
            </form>
          </div>
          <div className="container p-0 pb-5">
            <DishListItem dish={this.state.dishToRate} />
          </div>

          <div className="row d-flex w-100 p-4 justify-content-center">

            <div className="my-auto">
              <h4 className="font-weight-bold text-black">Your Rating: </h4>
            </div>

            <div>
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
              />
            </div>
          </div>

          <div className="row d-flex w-100 p-4 justify-content-center">
            <p><a href="#" className="btn btn-primary  py-2 px-4 rounded-0">Submit</a></p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row col-md-12">
          <div className="col-md-9 px-0 pb-4" data-aos="fade">
            <h2 className="font-weight-bold text-black">Add Rating</h2>
          </div>
          <div className="row col-md-12 px-0">
            <form className="col-md-12 py-4">
              <div className="input-group">
                <AutoSuggest restaurant={this.props.restaurant} selection={this.getSelection} />
              </div>
            </form>
          </div>
        </div>
      )
    }
  }


}

export default AddRatingContainer;