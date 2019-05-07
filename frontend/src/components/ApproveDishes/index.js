import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import Footer from '../Footer';

class ApproveDishes extends Component {
  render() {
    return (
      <Fragment>
        <MainView />
        <Footer />
      </Fragment>
    );
  }
}

export default ApproveDishes;