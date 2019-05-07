import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import LoginBanner from './LoginBanner';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <LoginBanner />
        <MainView />
      </Fragment>
    );
  }
}

export default Login;