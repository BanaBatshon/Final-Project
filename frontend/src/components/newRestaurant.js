import React from 'react'
import { Field, reduxForm } from 'redux-form'

let newRestaurantForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div class="col-md-12 col-lg-8 mb-5">
        <form action="#" class="p-5 bg-white">

          <div class="row form-group">
            <div class="col-md-12 mb-3 mb-md-0">
              <label class="font-weight-bold" for="fullname">Name</label>
              <Field name= "fullname" component="input" type="text" id="fullname" class="form-control" placeholder="Name"/>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-md-12">
              <label class="font-weight-bold" for="email">Address</label>
              <Field name="address" component="input" type="email" id="email" class="form-control" placeholder="eg. 1234 Main Street, Vancouver"/>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-md-12">
              <label class="font-weight-bold" for="email">Tags</label>
              <Field name="tags" component="input" type="email" id="email" class="form-control" placeholder=""/>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-md-12">
              <label class="font-weight-bold" for="email">Website</label>
              <Field name="website" component="input" type="email" id="email" class="form-control" placeholder="https://www.example.com"/>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-md-12">
              <label class="font-weight-bold" for="message">Description</label>
              <Field name="description" component="textarea" id="message" cols="30" rows="5" class="form-control"
                placeholder="Description"/>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-md-12">
              <input type="submit" value="Submit" class="btn btn-primary  py-2 px-4"/>
            </div>
          </div>

        </form>
      </div>
    </form>

  )}

newRestaurantForm = reduxForm({
  form: 'newRestaurant'
})(newRestaurantForm)

export default newRestaurantForm
