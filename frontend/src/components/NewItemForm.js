import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect}  from 'react-redux'
import ReactTags from 'react-tag-autocomplete';
import { Component } from 'react';
import axios from 'axios';

class NewItemForm extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      tags: [],
      suggestions: []
    }

    this.fetchAllTags();
  }

  fetchAllTags = () => {
    axios
    .get('http://localhost:3001/tags')
    .then(response => {
      this.setState({suggestions: response.data})
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
  return (
    <form onSubmit={ this.props.handleSubmit }>
      <div className="col-md-12 col-lg-8 mb-5">
        <div action="#" className="p-5 bg-white">

          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" htmlFor="restaurantId">Restaurant</label>
              <Field name="restaurantId" component="input" type="text" id="restaurantId" className="form-control" placeholder="Search by restaurant name"/>
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
                suggestions={this.state.suggestions}
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

