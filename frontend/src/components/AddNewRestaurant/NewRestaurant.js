import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";

const NewRestaurant = () => {
  const onSubmit = values => {
    axios.post("http://localhost:3001/restaurants", values);
  };
  return (
    <div>
      <NewRestaurantForm onSubmit={onSubmit} />{" "}
    </div>
  );
};

let NewRestaurantForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="col-md-12 col-lg-8 mb-5">
        <div action="#" className="p-5 bg-white">
          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" htmlFor="name">
                Name
              </label>
              <Field
                name="name"
                component="input"
                type="text"
                id="fullname"
                className="form-control"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="font-weight-bold" htmlFor="text">
                Address
              </label>
              <Field
                name="address"
                component="input"
                type="text"
                id="text"
                className="form-control"
                placeholder="eg. 1234 Main Street, Vancouver"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="font-weight-bold" htmlFor="text">
                Tags
              </label>
              <Field
                name="tags"
                component="input"
                type="text"
                id="text"
                className="form-control"
                placeholder=""
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="font-weight-bold" htmlFor="text">
                phone_number
              </label>
              <Field
                name="phone_number"
                component="input"
                type="text"
                id="text"
                className="form-control"
                placeholder="eg. (xxx) xxx xxxx"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="font-weight-bold" htmlFor="text">
                Website
              </label>
              <Field
                name="website"
                component="input"
                type="text"
                id="text"
                className="form-control"
                placeholder="https://www.example.com"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="font-weight-bold" htmlFor="message">
                Description
              </label>
              <Field
                name="description"
                component="textarea"
                id="message"
                cols="30"
                rows="5"
                className="form-control"
                placeholder="Description"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary  py-2 px-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

NewRestaurantForm = reduxForm({
  form: "NewRestaurant"
})(NewRestaurantForm);

export default NewRestaurant;
