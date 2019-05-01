import React, { Component } from 'react';
var axios = require('axios');

class NewRestaurantForm extends Component {
  state =  {
    name: '',
    address: '',
    phone_number: '',
    website: '',
    description: ''
  }

 
 
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {

    console.log('form submission event:', e)
    e.preventDefault();

    axios
      .post('http://localhost:3001/restaurants')
      .send({name: this.state.name, address: this.state.address, phone_number: this.state.phone_number, website: this.state.website, description: this.state.description, approved: false}) // sends a JSON post body
      .set('accept', 'json')
      .end((err, res) => {
        if (err) {
          console.log("An Error Occurred")
        }
        else {
        console.log(res);
        }
      });

  }

  render() {
    return (
      
      <div className="col-md-12 col-lg-8 mb-5">
            <form action="#" className="p-5 bg-white" onSubmit={this.handleSubmit}>

              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Name</label>
                  <input name="name" value={this.state.name} onChange={this.handleChange} type="text" id="fullname" className="form-control" placeholder="Name"/>
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <label className="font-weight-bold" htmlFor="text">Address</label>
                  <input name="address" value={this.state.address} onChange={this.handleChange} type="text" id="text" className="form-control" placeholder="eg. 1234 Main Street, Vancouver"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="font-weight-bold" htmlFor="text">Phone Number</label>
                  <input name="phone_number" value={this.state.phone_number} onChange={this.handleChange} type="text" id="text" className="form-control" placeholder=""/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="font-weight-bold" htmlFor="text">Website</label>
                  <input name="website" value={this.state.website} onChange={this.handleChange} type="text" id="text" className="form-control" placeholder="https://www.example.com"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="font-weight-bold" htmlFor="message">Description</label>
                  <textarea name="description" value={this.state.description} onChange={this.handleChange} id="message" cols="30" rows="5" className="form-control"
                    placeholder="Description"></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value={this.state.submit} className="btn btn-primary  py-2 px-4"/>
                </div>
              </div>


            </form>
          </div>
    )
  }
}
export default NewRestaurantForm;