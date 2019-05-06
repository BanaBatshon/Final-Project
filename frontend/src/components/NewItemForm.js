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
        this.setState({ restaurants: restaurantNames })
        console.log("restaurants in state: ", this.state.restaurants)
      })
      .catch(error => {
        throw (error);
      });
  };

  escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : this.state.restaurants.filter(restaurant =>
      restaurant.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  getSuggestionValue = restaurantSuggestion => restaurantSuggestion;

  renderSuggestion = restaurantSuggestion => (
    <div>
      {restaurantSuggestion}
    </div>
  );

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      restaurantSuggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      restaurantSuggestions: []
    });
  };

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
    const { value, restaurantSuggestions } = this.state;
    const inputProps = {
      placeholder: "Search for restaurants",
      value,
      onChange: this.onChange
    };
  return (
    <form onSubmit={ this.props.handleSubmit }>
      <div className="col-md-12 col-lg-8 mb-5">
        <div action="#" className="p-5 bg-white">
          
          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" htmlFor="restaurantId">Restaurant</label>
                <Autosuggest
                  suggestions={this.state.restaurantSuggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={this.getSuggestionValue}
                  renderSuggestion={this.renderSuggestion}
                  inputProps={inputProps}
                />
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
                <ReactTags
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

        </div>
      </div>
    </form>

  )}
}

NewItemForm = reduxForm({
  form: 'newItem'
})(NewItemForm)

const mapStateToProps = (state) => ({
  newItems: state.newItems
})

export default connect(
  mapStateToProps)(NewItemForm);

