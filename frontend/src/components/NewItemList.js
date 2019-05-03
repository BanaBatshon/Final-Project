import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import MenuItemRow from './MenuItemRow';
import { Component } from 'react';

class NewItemListTable extends Component {
  handleOnSubmit = (e) => {
    e.preventDefault();
    for ( let k = 0; k < this.props.newItems.menuItem.length; k++ ) {
      this.props.newItems.menuItem[0].tags = [this.props.newItems.menuItem[0].tags];
      this.props.newItems.menuItem[0].restaurantId=1;
      axios
      .post ('http://localhost:3001/items', (this.props.newItems.menuItem[k]) )
    }
  }
  render() {
    if (this.props.newItems.menuItem.length) {
      return (
        <table>
          <div className="table table-sm">
            <thead>
              <tr>
                <th class="w-5">#</th>
                <th class="w-25">Dish</th>
                <th class="w-25">Tags</th>
                <th class="w-15"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.newItems.menuItem.map((item) => {
                return (
                  <MenuItemRow name={item.name} tags={item.tags}/>
                )}
              )}
            </tbody>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <button onClick={this.handleOnSubmit} className="btn btn-primary  py-2 px-4">Submit</button>
            </div>
          </div>
        </table>
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
  mapStateToProps
)(NewItemListTable);