import React from 'react';

import PhoneImage from '../../../../assets/images/phone.svg'
import classes from './Phone.module.css'

const Phone = props => {
    return (
        <div className={classes.Container}>
            <img alt="phone" src={PhoneImage} className={classes.Phone} />
        </div>
    )
};

export default Phone;