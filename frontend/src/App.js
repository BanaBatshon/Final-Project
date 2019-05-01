import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Restaurants from './components/Restaurants'
import Navigation from './components/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'
import NewRestaurantForm from './components/NewRestaurant';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="site-wrap">
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/restaurants/explore' component={Restaurants} />
          <Route path='/restaurant' component={NewRestaurantForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
