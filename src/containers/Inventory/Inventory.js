import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Helmet } from 'react-helmet'

import * as actions from '../../store/actions/index'

class Inventory extends Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>Invetory managment</title>
                </Helmet>
                <h2>Inventory</h2>
            </div>
        )
    }
};

export default Inventory