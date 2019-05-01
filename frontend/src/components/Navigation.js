import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <header className="site-navbar py-1" role="banner">

        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 col-xl-2">
              <h1 className="mb-0"><a href="/" className="text-black h2 mb-0"><strong>Foodie</strong></a></h1>
            </div>

            <div className="col-10 col-xl-10 d-none d-xl-block">
              <nav className="site-navigation text-right" role="navigation">

                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li className="has-children">
                    <a href="/restaurants/explore">Restaurants</a>
                    <ul className="dropdown">
                      <li><a href="/restaurants/explore">Explore</a></li>
                      <li><a href="/">New Restaurant Submission</a></li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="/">Dishes</a>
                    <ul className="dropdown">
                      <li><a href="/">Explore</a></li>
                      <li><a href="/">New Dish Submission</a></li>
                    </ul>
                  </li>
                  <li><a href="/">My Ratings</a></li>
                  <li><a href="/"><span className="rounded bg-secondary py-2 px-3 text-white">Login</span></a>
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