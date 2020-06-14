import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import * as actions from './store/actions/index';
import Layout from './components/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Inventory from './containers/Manager/Inventory/Inventory';
import Users from './containers/Manager/UserManagement/UserManagement';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  componentDidMount() {
    this.props.onAutoSignUp();
  }

  render() {
    let routes = null;

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path='/inventory' component={Inventory} />
          <Route path='/users' component={Users} />
          <Route path='/logout' component={Logout} />
          <Redirect exact to='/users' />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route path='/auth' component={Auth} />
          <Redirect exact to='/auth' />
        </Switch>
      );
    }

    return (
      <div>
        {this.props.authCheckFinished ? (
          <div className='App'>
            {this.props.isAuth ? <Layout>{routes}</Layout> : routes}
          </div>
        ) : null}
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
    authCheckFinished: state.auth.authCheckFinished,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
