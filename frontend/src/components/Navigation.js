import React from 'react';
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
      <header className="site-navbar py-1" role="banner">

        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 col-xl-2">
              <h1 className="mb-0"><Link to="/" className="text-black h2 mb-0"><strong>Foodie</strong></Link></h1>
            </div>

            <div className="col-10 col-xl-10 d-none d-xl-block">
              <nav className="site-navigation text-right" role="navigation">

                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li className="has-children">
                    <Link to="/restaurants/explore">Restaurants</Link>
                    <ul className="dropdown">
                      <li><Link to="/restaurants/explore">Explore</Link></li>
                      <li><Link to="/">New Restaurant Submission</Link></li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/dishes/explore">Dishes</Link>
                    <ul className="dropdown">
                      <li><Link to="/dishes/explore">Explore</Link></li>
                      <li><Link to="/">New Dish Submission</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/">My Ratings</Link></li>
                  <li><Link to="/"><span className="rounded bg-secondary py-2 px-3 text-white">Login</span></Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navigation;