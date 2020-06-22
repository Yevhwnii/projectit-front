import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import * as actions from './store/actions/index';
import Layout from './components/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Inventory from './containers/Manager/Inventory/Inventory';
import Users from './containers/Manager/UserManagement/UserManagement';
import Billing from './containers/Cashier/Billing/Billing';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  componentDidMount() {
    this.props.onAutoSignUp();
  }
  // Test creds:
  // Manager -  OxKPsM115 , .V8<??z$J5~C
  // Cashier - QEDKnu7Hj , 3uPQJ*n_Ugh3ETcX

  render() {
    let routes = null;

    if (this.props.isAuth) {
      if (this.props.role === 'Manager') {
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
            <Route path='/billing' component={Billing} />
            <Route path='/logout' component={Logout} />
            <Redirect exact to='/billing' />
          </Switch>
        );
      }
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
    role: state.auth.role,
    authCheckFinished: state.auth.authCheckFinished,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
