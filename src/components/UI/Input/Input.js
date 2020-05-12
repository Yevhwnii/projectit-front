import React from 'react';

import classes from './Input.module.css'

const Input = props => {
    let inputElement = null
    console.log(props.elementConfig);
    
    switch (props.elementType) {
        case 'input':
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}

            />
            break;
        default:
            break;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default Input;