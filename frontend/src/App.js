import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Restaurants from './components/Restaurants'
import RestaurantSearchResults from './components/RestaurantSearchResults'
import Navigation from './components/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="site-wrap">
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/restaurants/explore' component={Restaurants} />
          <Route path='/restaurants/results' component={RestaurantSearchResults} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
