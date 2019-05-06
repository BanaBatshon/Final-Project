import React from 'react'
import { connect } from 'react-redux';
import MenuItemRow from './MenuItemRow';
import { Component, Fragment } from 'react';
import { postMenuItemsToServer } from '../../util/index.js';

class NewItemListTable extends Component {
  handleOnSubmit = (e) => {
    e.preventDefault();
    postMenuItemsToServer(this.props.newItems.menuItem);
  }
  
  render() {
    if (this.props.newItems.menuItem.length) {
      return (
        <Fragment>
          <div className="table table-sm">
            <table>
              <thead>
                <tr>
                  <th className="w-5">#</th>
                  <th className="w-25">Dish</th>
                  <th className="w-25">Tags</th>
                  <th className="w-15"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.newItems.menuItem.map((item, index) => {
                  return (
                    <MenuItemRow key={ index } index={ index } name={item.name} tags={item.tags}/>
                  )})
                }
              </tbody>
              </table>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <button onClick={this.handleOnSubmit} className="btn btn-primary  py-2 px-4">Submit</button>
              </div>
          </div>
        </Fragment>
      )
    }
    else {
      return <div></div>
    }
  }
}

const mapStateToProps = state => {
  return {
    newItems: state.newItems
  }
}
  
export default connect(
  mapStateToProps,
)(NewItemListTable);