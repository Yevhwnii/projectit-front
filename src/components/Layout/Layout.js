import React, {Fragment} from 'react';

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = props => {
    return (
        <Fragment>
            <div className={classes.Background}>
                <Toolbar />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </div>
        </Fragment>
    )
};





export default Layout;