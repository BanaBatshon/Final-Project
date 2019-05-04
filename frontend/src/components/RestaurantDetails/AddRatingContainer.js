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
    // this.setState({ value: undefined });
    const request = {
      userId: 1,
      menuitemId: this.state.dishToRate.id,
      rating: this.state.value
    }
    console.log(request)
  }

  cancelRating = () => {
    this.setState({ dishToRate: {}, value: 0})
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
                initialRating={this.state.value}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                onChange={(value) => this.setState({value: value})}
              />
            </div>
          </div>

          <div className="row d-flex w-100 p-4 justify-content-center">
            <button onClick={this.handleClick} className="btn btn-primary py-2 px-4 mx-1 rounded-0">Submit</button>
            <button onClick={this.cancelRating} className="btn btn-danger  py-2 px-4 mx-1 rounded-0">Cancel</button>
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