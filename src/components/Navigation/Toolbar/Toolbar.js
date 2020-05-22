import React from 'react';

import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <div>
                Logo
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    )
};

export default Toolbar;