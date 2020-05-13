import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

import * as actions from './store/actions/index'
import Auth from './containers/Auth/Auth'
import Inventory from './containers/Inventory/Inventory'

class App extends Component {

  componentDidMount() {
    this.props.onAutoSignUp()
  }
  
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    )

    if(this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/dashboard" component={Inventory}/>
          <Redirect to="/dashboard" />
        </Switch>
      )
    }

    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoSignUp: () => dispatch(actions.checkAuthState())
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
