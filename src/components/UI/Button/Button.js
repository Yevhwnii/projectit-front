import React from 'react';

import classes from './Button.module.css'

const Button = props => {
    let buttonClasses = [classes.Button]
    


    return (
        <div>
            <input type="submit" disabled={props.disabled} className={buttonClasses.join(' ')} value={props.children}/>
        </div>
    )
};

export default Button;