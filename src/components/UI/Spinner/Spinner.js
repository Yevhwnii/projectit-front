import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader'

import classes from './Spinner.module.css'

const Spinner = props => {
    return (
        <ClipLoader className={classes.Spinner}
            loading={props.loading}
            color={"#38d39f"}
            size={100}
         />
    )
};

export default Spinner;