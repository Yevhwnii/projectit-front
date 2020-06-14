import React from 'react';
import { connect } from 'react-redux';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Container}>
        <Logo />
        <span className={classes.UserId}>User ID: {props.userId}</span>
        <span>Role: </span>
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps)(Toolbar);
