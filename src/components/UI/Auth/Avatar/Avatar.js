import React from 'react';

import AvatarSVG from '../../../../assets/images/avatar.svg'
import classes from './Avatar.module.css'

const Avatar = props => {
    return (
        <img alt="avatar" src={AvatarSVG} className={classes.Avatar} />
    )
};

export default Avatar;