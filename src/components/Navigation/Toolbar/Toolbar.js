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
        <div className={classes.Info}>
          <span className={classes.Text}>User ID: {props.userId}</span>
          <span className={classes.Text}>Role: {props.role} </span>
        </div>
      </div>
      <nav>
        <NavigationItems role={props.role} />
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    role: state.auth.role,
  };
};
export default connect(mapStateToProps)(Toolbar);
