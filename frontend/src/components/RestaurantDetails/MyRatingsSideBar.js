import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom"

class MyRatingsSideBar extends Component {


  render() {
    return (
      <div className="col-lg-4">
        <div className="p-4 mb-3 bg-white">
          <h3 className="h4 text-black mb-3"><strong>My Ratings</strong></h3>
            
        </div>
      </div>
    )
  }
}

export default withRouter(MyRatingsSideBar);