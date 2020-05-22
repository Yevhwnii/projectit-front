import React from 'react';
import {connect} from 'react-redux'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavItems = props => {
    return (
        <ul className={classes.NavItems}>
            <NavigationItem link="/inventory">
                Inventory
            </NavigationItem>
            <NavigationItem link="/logout">
                Logout
            </NavigationItem>
        </ul>
    )
};

export default NavItems
