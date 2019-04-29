import React, { Component } from 'react';
import { connect } from 'react-redux'

class AdminForm extends Component {
  render() {
    return (
      <div class="col-md-12 col-lg-8 mb-5">
            <form action="#" class="p-5 bg-white">

              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="fullname">Name</label>
                  <input type="text" id="fullname" class="form-control" placeholder="Name"/>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="email">Address</label>
                  <input type="email" id="email" class="form-control" placeholder="eg. 1234 Main Street, Vancouver"/>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="email">Tags</label>
                  <input type="email" id="email" class="form-control" placeholder=""/>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="email">Website</label>
                  <input type="email" id="email" class="form-control" placeholder="https://www.example.com"/>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="message">Description</label>
                  <textarea name="message" id="message" cols="30" rows="5" class="form-control"
                    placeholder="Description"></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Submit" class="btn btn-primary  py-2 px-4"/>
                </div>
              </div>


            </form>
          </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    AdminForm: state.admin,
  }
}

export default connect(
  mapStateToProps,
  null
)(AdminForm)