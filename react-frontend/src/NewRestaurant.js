import React, { Component } from 'react';
// import { connect } from 'react-redux'

class NewRestaurantForm extends Component {
  state =  {
    Name: '',
    Address: '',
    Tags: '',
    Website: '',
    Description: '',
    submit: 'submit'
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventefault();
    this.setstate({ ['submit']: 'submitted'})
  }

  render() {
    return (
      
      <div class="col-md-12 col-lg-8 mb-5">
            <form action="#" class="p-5 bg-white">

              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="fullname">Name</label>
                  <input name="Name" value={this.state.Name} onChange={this.handleChange} type="text" id="fullname" class="form-control" placeholder="Name"/>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="text">Address</label>
                  <input name="Address" value={this.state.Address} onChange={this.handleChange} type="text" id="text" class="form-control" placeholder="eg. 1234 Main Street, Vancouver"/>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="text">Tags</label>
                  <input name="Tags" value={this.state.Tags} onChange={this.handleChange} type="text" id="text" class="form-control" placeholder=""/>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="email">Website</label>
                  <input name="Website" value={this.state.Website} onChange={this.handleChange} type="email" id="text" class="form-control" placeholder="https://www.example.com"/>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="message">Description</label>
                  <textarea name="Description" value={this.state.Description} onChange={this.handleChange} id="message" cols="30" rows="5" class="form-control"
                    placeholder="Description"></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value={this.state.submit} onSubmit={this.handleSubmit} class="btn btn-primary  py-2 px-4"/>
                </div>
              </div>


            </form>
          </div>
    )
  }
}

export default NewRestaurantForm;