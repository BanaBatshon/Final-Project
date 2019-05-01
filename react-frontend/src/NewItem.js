import React, { Component } from 'react';
var axios = require ('axios');

class NewMenuItemForm extends Component {
  state =  {
    name: '',
    restaurantId: '',
    tags: [{}]
  }
 
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {

    console.log('form submission event:', e)
    e.preventDefault();

    axios
      .post('http://localhost:3001/tags')
      .send({name: this.state.name, restaurantId: this.state.restaurantId, approved: false}) // sends a JSON post body
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
                  <label className="font-weight-bold" htmlFor="fullname">Menu Item</label>
                  <input name="name" value={this.state.name} onChange={this.handleChange} type="text" id="fullname" className="form-control" placeholder="suggest a new menu item"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="font-weight-bold" htmlFor="text">Restaurant ID</label>
                  <input name="restaurantId" value={this.state.restaurantId} onChange={this.handleChange} type="number" id="number" className="form-control" placeholder="eg. 1"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="font-weight-bold" htmlFor="text">Tags</label>
                  <input name="tags" value={this.state.tags} onChange={this.handleChange} type="text" id="text" className="form-control" placeholder="tags..."/>
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
export default NewMenuItemForm;