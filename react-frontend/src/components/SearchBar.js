import React from 'react';

class SearchBar extends React.Component {
  
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
          <div className="tab-pane fade show active" id="pills-restaurant" role="tabpanel"
            aria-labelledby="pills-restaurant-tab">
            <form action="#" method="post">
              <div className="row">
                <div className="col-md-6 col-lg-9 mb-3 mb-lg-0">
                  <input type="text" className="form-control" placeholder="eg. Italian, Brunch, Pizza, etc..." />
                </div>
                <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                  <input type="submit" className="btn btn-primary btn-block" value="Search" />
                </div>
              </div>
            </form>
          </div>

          <div className="tab-pane fade" id="pills-dish" role="tabpanel" aria-labelledby="pills-dish-tab">
            <form action="#" method="post">
              <div className="row">
                <div className="col-md-6 col-lg-9 mb-3 mb-lg-0">
                  <input type="text" className="form-control" placeholder="eg. Pizza, Burger, Sushi, etc..." />
                </div>
                <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                  <input type="submit" className="btn btn-primary btn-block" value="Search" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;