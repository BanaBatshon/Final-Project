import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NewItemForm from './NewItemForm';
import NewItemList from './NewItemList';
import { addNewItemToNewItemList } from '../actions';
import {reset} from 'redux-form';

class AddNewItem extends Component {

  constructor(props) {
    super(props)

    this.restaurants = [];
    this.tags = [];
  }
  
  handleSubmit = (values) => {
    let newItem = Object.assign({}, values);
    newItem.restaurantId = this.restaurants[0].restaurantId;
    newItem.approved = false;
    newItem.tags= this.tags;
    this.props.dispatch(addNewItemToNewItemList(newItem))
    this.props.dispatch(reset('newItem'));
  }

  setTags = (tags) => {
    this.tags = tags
  }

  setRestaurants = (restaurants) => {
    this.restaurants = restaurants
  }
  
  render() {
    return (
      <Fragment>
        <NewItemForm setTags={ this.setTags } setRestaurants={ this.setRestaurants } onSubmit={ this.handleSubmit }/>
        <NewItemList />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    AddNewItem: state.newItems
  }
}

export default connect(
  mapStateToProps
)(AddNewItem);