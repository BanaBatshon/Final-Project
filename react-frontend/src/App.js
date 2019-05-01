import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import RestaurantList from './components/RestaurantList';

class App extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Navigation />
        <Hero />
        <RestaurantList />
      </div>
    );
  }
}

export default App;
