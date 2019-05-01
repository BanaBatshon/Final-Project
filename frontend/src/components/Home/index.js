import React, { Component, Fragment } from 'react';
import Navigation from '../Navigation';
import Hero from '../Hero';
import MainView from './MainView';


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <MainView />
      </Fragment>
    );
  }
}

export default Home;