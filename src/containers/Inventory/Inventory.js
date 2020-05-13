import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Helmet } from 'react-helmet'

import * as actions from '../../store/actions/index'

class Inventory extends Component {

    onLogout = () => {
        this.props.onLogout()
        return (
            <Redirect to="/" />
        )
    }


    render() {
        return (
            <div>
                <Helmet>
                    <title>Invetory managment</title>
                </Helmet>
                <h2>Inventory</h2>
                <button onClick={this.onLogout}>Logout</button>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}


export default connect(null, mapDispatchToProps)(Inventory);