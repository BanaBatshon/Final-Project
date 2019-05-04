import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { withRouter } from "react-router-dom"

class AutoSuggest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      dishes: []
    };

    this.fetchAllRestaurantDishes();
  }

  fetchAllRestaurantDishes = () => {
    const restaurantId = this.props.location.pathname.split('/restaurant/')[1];

    axios.get(`http://localhost:3001/restaurants/${restaurantId}/items`)
      .then(response => {
        this.setState({ dishes: response.data })
      })
      .catch(error => {
        throw (error);
      });
  };

  getSuggestions = (value) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return this.state.dishes.filter(dish => regex.test(dish.name));
  }


  getSuggestionValue = (suggestion) => {
    return suggestion.name;
  }

  renderSuggestion = (suggestion) => {
    return (
      <span>{suggestion.name}</span>
    );
  }

  escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.props.selection(suggestion);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search for dish ",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}

export default withRouter(AutoSuggest);