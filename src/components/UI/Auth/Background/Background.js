import React from 'react';

import Wave from '../../../../assets/images/wave.png'
import classes from './Background.module.css'

const Background = props => {
    return (
        <div>
            <img alt="background" src={Wave} className={classes.Background} />
        </div>
    )
};

export default Background;