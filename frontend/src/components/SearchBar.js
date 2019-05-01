import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';


const InputField = (field) => ( 
  <div className="col-md-6 col-lg-9 mb-3 mb-lg-0">
    <input {...field.input} {...field} /> 
  </div>
)

let RestaurantSearchForm = props => {
  const { handleSubmit } = props;
  return (

    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* <div className="col-md-6 col-lg-9 mb-3 mb-lg-0"> */}
          <Field name="restaurantQuery" type="text" component={InputField} className="form-control" placeholder="eg. Italian, Brunch, Pizza, etc..." />
        {/* </div> */}
        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <button type="submit" className="btn btn-primary btn-block">Search</button>
        </div>
      </div>
    </form>
  )
}

RestaurantSearchForm = reduxForm({
  form: 'restaurantSearch'
})(RestaurantSearchForm);

class SearchBar extends React.Component {

  handleRestaurantSearch = values => {
    console.log(values);
  }

  render() {
    return (
      <div className="dish-restaurant-search">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active py-3" id="pills-restaurant-tab" data-toggle="pill" href="#pills-restaurant"
              role="tab" aria-controls="pills-restaurant" aria-selected="true">Top Restaurants</a>
          </li>
          <li className="nav-item">
            <a className="nav-link py-3" id="pills-dish-tab" data-toggle="pill" href="#pills-dish" role="tab"
              aria-controls="pills-dish" aria-selected="false">Top Dishes</a>
          </li>
        </ul>
        <div className="tab-content bg-white p-4 rounded" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-restaurant" role="tabpanel" aria-labelledby="pills-restaurant-tab">
            <RestaurantSearchForm onSubmit={this.handleRestaurantSearch} />
          </div>
        </div>

      </div>
    )
  }
}

export default SearchBar;