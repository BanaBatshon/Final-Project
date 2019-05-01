import React, { Component } from 'react';
import Navigation from '../Navigation';
import Hero from '../Hero';
import MainView from './MainView';

class Home extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Navigation />
        <Hero />
        <MainView />
      </div>
    );
  }
}

export default Home;