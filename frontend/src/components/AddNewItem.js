import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NewItem from './NewItem';
import NewItemList from './NewItemList';

class AddNewItem extends Component {

  componentDidUpdate() {
   this.render()
   }
  
  render() {
    return (
      <Fragment>
        <NewItem />
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