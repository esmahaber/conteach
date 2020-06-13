import './App.css';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/pages/loginPage';
import Register from './components/register';
import HomePage from './components/pages/homePage';
import ResetPassword from './components/resetPassword';
import AuthHome from './auth/components/pages/homePage';
import NotePage from './auth/components/Screen'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path='/home' render={props => (
          (!!document.cookie) ? <HomePage />
            : <Redirect to={{ pathname: '/' }} />
        )} />
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/reset_password' component={ResetPassword}></Route>
        <Route exact path='/auth/home' render={props => (
          (!!document.cookie) ? <AuthHome />
            : <Redirect to={{ pathname: '/' }}
            />
        )} />
        <Route exact path='/note_screen' component={NotePage}></Route>
      </div>
    );
  }


}

App.propTypes = {
  user: PropTypes.any
}

const mapStateToProps = state => ({
  user: state
});

export default connect(mapStateToProps, null)(App);
