import React from 'react'
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect}  from 'react-redux'
import ReactTags from 'react-tag-autocomplete';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

class NewItemForm extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      tags: [],
      tagSuggestions: [],
      value: '',
      restaurantSuggestions: [],
      restaurants: []
    }

    this.fetchAllRestaurants();
    this.fetchAllTags();
  }

  fetchAllRestaurants = () => {
    axios.get(`http://localhost:3001/restaurants/`)
      .then(response => {
        const restaurantNames = [];
        for (let restaurant of response.data) {
          restaurantNames.push({name: restaurant.name, restaurantId: restaurant.id})
        }
        this.setState({ restaurantSuggestions: restaurantNames })
      })
      .catch(error => {
        throw (error);
      })
  }

  escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  getSuggestions = (value) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    return this.state.restaurantSuggestions.filter(restaurant => regex.test(restaurant.name));
  }
  
  getSuggestionValue = (restaurantSuggestion) => {
    return restaurantSuggestion.name;
  }
  
  renderSuggestion = (restaurantSuggestion) => {
    return <span>{restaurantSuggestion.name}</span>
  }
  
  onChange = (event, { newValue, method }) => {
    this.setState({ value: newValue })
  }
    
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ restaurants: this.getSuggestions(value) });
  }

  onSuggestionsClearRequested = () => {
    this.setState({ restaurants: [] })
  }
  
  onSuggestionSelected = (event) => {
    this.props.setRestaurants(this.state.restaurants);
  }

  fetchAllTags = () => {
    axios
    .get('http://localhost:3001/tags')
    .then(response => {
      this.setState({tagSuggestions: response.data})
    })
  }

  handleDelete = (i) => {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags }, function() {
      this.props.setTags(this.state.tags);
    })
  }
 
  handleAddition = (tag) => {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags }, function() {
      this.props.setTags(this.state.tags);
    })
  }

  deletTags = () => {
    this.setState({tags: []})
  }

  render() {
    const { value } = this.state;
    const inputProps = {
      placeholder: "Search for restaurants",
      value,
      onChange: this.onChange
    }

  return (
    <div class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8 mb-5">
            <form onSubmit={ this.props.handleSubmit } action="#" class="p-5 bg-white">
              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="restaurantId">Restaurant</label>
                      <Autosuggest
                        suggestions={this.state.restaurants}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        onSuggestionSelected={ this.onSuggestionSelected }
                        inputProps={inputProps}/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="font-weight-bold" htmlFor="name">Dish</label>
                    <Field name="name" component="input" type="text" id="name" className="form-control" placeholder="eg. Pepperoni Pizza"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="font-weight-bold" htmlFor="tags">Tags</label>
                    <ReactTags className="form-control"
                      tags={this.state.tags}
                      suggestions={this.state.tagSuggestions}
                      handleDelete={this.handleDelete}
                      handleAddition={this.handleAddition}/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <button type="submit" onClick={ this.deletTags } className="btn btn-primary  py-2 px-4">Add Dish</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="p-4 mb-3 bg-white">
              <h3 class="h5 text-black mb-3">Submission Disclaimer</h3>
              <p class="mb-4">We thank you for your contribution to Foodie. Your effort is what makes Foodie the #1 food
                review site on the internet. Please allow up to 48 hours for your submission to be approved and points
                to be credited to your account. Thanks!</p>
              <p class="mb-0 font-weight-bold">Questions?</p>
              <p class="mb-0"><a href="#">youremail@domain.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )}
}

NewItemForm = reduxForm({
  form: 'newItem'
})(NewItemForm)

const mapStateToProps = (state) => ({
  newItems: state.newItems
})

export default connect(mapStateToProps)(NewItemForm)
