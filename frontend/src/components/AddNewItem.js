import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NewItemForm from './NewItemForm';
import NewItemList from './NewItemList';
import { addNewItemToNewItemList } from '../actions';


class AddNewItem extends Component {
  
  handleSubmit = values => {
    this.props.dispatch(addNewItemToNewItemList(values));
    console.log("values: ", values)
  }
  
  render() {
    return (
      <Fragment>
        <NewItemForm onSubmit={ this.handleSubmit }/>
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