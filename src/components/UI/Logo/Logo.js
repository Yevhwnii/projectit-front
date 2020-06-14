import React from 'react';

import LogoImage from '../../../assets/images/logo.svg';
import classes from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={classes.Container}>
      <img alt='logo' src={LogoImage} className={classes.Logo} />
    </div>
  );
};

export default Logo;
