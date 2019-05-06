import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Restaurants from './components/Restaurants'
import Navigation from './components/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'
import NewRestaurant from './components/AddNewRestaurant/NewRestaurant';
import AddNewItem from './components/AddNewDish/AddNewItem';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="site-wrap">
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/restaurants/explore' component={Restaurants} />
          <Route path='/restaurant/new' component={NewRestaurant} />
          <Route path='/item/new' component={AddNewItem} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
