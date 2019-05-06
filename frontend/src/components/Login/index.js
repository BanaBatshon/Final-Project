import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import LoginBanner from './LoginBanner';
import Footer from '../Footer';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <LoginBanner />
        <MainView />
        <Footer />
      </Fragment>
    );
  }
}

export default Login;