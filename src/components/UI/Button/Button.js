import React from 'react';

import classes from './Button.module.css'

const Button = props => {
    let buttonClasses = [classes.Button]
    

    switch (props.type) {
        case 'auth':
            buttonClasses.push(classes.AuthButton)
            break;
        default:
            break;
    }

    return (
        <div>
            <input type="submit" className={buttonClasses.join(' ')} value={props.children}/>
        </div>
    )
};

export default Button;