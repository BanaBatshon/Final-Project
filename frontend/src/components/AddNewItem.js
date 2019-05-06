import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NewItemForm from './NewItemForm';
import NewItemList from './NewItemList';
import { addNewItemToNewItemList } from '../actions';
import {reset} from 'redux-form';

class AddNewItem extends Component {

  constructor(props) {
    super(props)

    this.tags = [];
  }
  
  handleSubmit = (values) => {
    let newItem = Object.assign({}, values);
    newItem.restaurantId = Number(newItem.restaurantId) //delete later
    newItem.tags= this.tags;
    this.props.dispatch(addNewItemToNewItemList(newItem))
    this.props.dispatch(reset('newItem'));
  }

  setTags = (tags) => {
    this.tags = tags
  }
  render() {
    return (
      <Fragment>
        <NewItemForm setTags={ this.setTags} onSubmit={ this.handleSubmit }/>
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