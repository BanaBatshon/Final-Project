import React, {Component} from 'react';
import Tag from './Tag';
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

class RatingItem extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (<Rating
      readonly={!this.props.modify}
      initialRating={this.props.rating.rating}
      fullSymbol="list-rating-review fa fa-star"
      emptySymbol="list-rating-review fa fa-star-o"
      fractions={2}
      onChange={this.props.handleChange}
    />)
  }
}

class RatingListItem extends Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {modify: false, rating: props.rating};
  }

  handleChange = (event) => {
    console.log(event)
    this.setState((prevState) => {
      let rating = prevState.rating;
      rating.rating = event;
      return {modify: false, rating: rating};
    });
  }

  clickHandler = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {modify: true, rating: prevState.rating};
    });
    //console.log(this.rating.id);
  };

  render() {
    const menuitem = this.state.rating.menuitem;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="list-item bg-white p-4 d-block d-md-flex align-items-center">
            <div className="thumbnail-wrap">
              <img src="images/thumbnail_1.jpg" alt="" className="list-item-thumbnail" />
            </div>
            <div className="mb-4 mb-md-0 mr-5">
              <div className="list-item-header d-flex align-items-center">
                <h2 className="mr-3 text-black h4"><Link to={`/restaurant/${menuitem.restaurantId}`}>{menuitem.name}</Link></h2>
                <div className="badge-wrap">
                  {menuitem.menuitemtags.map(tag => {
                    return (
                      <Tag tag={tag} />
                    );
                  })}
                </div>
              </div>
              <div className="list-item-body d-block d-md-flex">
                <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">{menuitem.restaurant.name}</a>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <div className="d-flex justify-content-around pb-4">
              <RatingItem handleChange={this.handleChange} rating={this.state.rating} modify={this.state.modify}/>
              </div>
              <div className="my-ratings-actions ml-auto d-flex justify-content-between">
                <a href="#" onClick={this.clickHandler} className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#exampleModalCenter">Edit</a>
                <a href="#" className="btn btn-danger btn-sm">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


}
export default RatingListItem;