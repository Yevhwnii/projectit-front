import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import * as actions from './store/actions/index';
import Layout from './components/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Users from './containers/Manager/UserManagement/UserManagement';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  componentDidMount() {
    this.props.onAutoSignUp();
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Redirect to='/auth' />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path='/dashboard' component={Users} />
          <Route path='/logout' component={Logout} />
          <Redirect to='/dashboard' />
        </Switch>
      );
    }

    return (
      <div className='App'>
        {this.props.isAuth ? <Layout>{routes}</Layout> : routes}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignUp: () => dispatch(actions.checkAuthState()),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
