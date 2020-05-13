import React, { Component } from 'react';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from './Input.module.css'

class Input extends Component {

    state = {
        focused: false,
    }

    onFocus = () => {
        this.setState({focused: true})
    }
    onBlur = () => {
        if (!this.props.value) {
            this.setState({focused: false}) 
        } 
    }

    render() {        
        let inputElement = null
        let inputIcon = null
        let inputClasses = [classes.InputElement]
        let iconClasses = [classes.Icon]
        let labelClasses = [classes.Label]
        let inputDivClasses = [classes.InputWithIcon]

        if (this.props.icon) {
            switch (this.props.icon) {
                case 'user':
                    inputIcon = faUser
                    break;
                case 'lock':
                    inputIcon = faLock
                    break;
                default:
                    break;
            }
        }

        if(this.state.focused) {
            iconClasses.push(classes.IconFocused)
            labelClasses.push(classes.LabelFocused)
            inputDivClasses.push(classes.InputWithIconFocused)
        }
        
        
        switch (this.props.elementType) {
            case 'input':
                inputElement = <input
                    className={inputClasses.join(' ')}
                    {...this.props.elementConfig}
                    value={this.props.value}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={(e) => this.props.changed(e, this.props.id)}
                />
                break;
            default:
                break;
        }
    
        return (
            <div>  
                {this.props.icon ? 
                    <div className={inputDivClasses.join(' ')}>
                        <div className={classes.IconDiv}>
                            <FontAwesomeIcon className={iconClasses.join(' ')} icon={inputIcon} /> 
                        </div>
                        <div className={classes.LabelDiv}>
                            <label className={labelClasses.join(' ')}>{this.props.label}</label>
                            {inputElement}
                        </div>
                    </div> 
                : 
                <div>
                    <label className={classes.Label}>{this.props.label}</label>
                    {inputElement}
                </div>}
            </div>
        )
    }
};

export default Input;