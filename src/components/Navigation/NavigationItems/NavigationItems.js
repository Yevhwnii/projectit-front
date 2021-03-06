import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      {props.role === 'Manager' ? (
        <React.Fragment>
          <NavigationItem link='/users'>User Managment</NavigationItem>
          <NavigationItem link='/inventory'>Inventory</NavigationItem>
          <NavigationItem link='/logout'>Logout</NavigationItem>
        </React.Fragment>
      ) : (
        <NavigationItem link='/logout'>Logout</NavigationItem>
      )}
    </ul>
  );
};

export default NavItems;
