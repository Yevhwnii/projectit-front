import React, { Component } from 'react';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition} from 'react-transition-group'

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
        const animationTiming = {
            enter: 600,
            exit: 1000
        }       
        let inputElement = null
        let inputIcon = null
        let inputClasses = [classes.InputElement]
        let iconClasses = [classes.Icon]
        let labelClasses = [classes.Label]
        let inputDivClasses = [classes.InputWithIcon]
        let borderBottomClasses = [classes.BorderBottomFocused]
        let errorMsg = null

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

        if (this.props.invalid && this.props.touched && this.props.value !== '' && this.props.value.length >= 5) {
            borderBottomClasses.push(classes.BorderBottomFocusedDanger)
            iconClasses.push(classes.IconFocusedDanger)
            switch (this.props.elementConfig.type) {
                case 'text':
                    errorMsg = 'Enter a valid ID'
                    break;
                case 'password':
                    errorMsg = 'Password should consist of at least 8 characters, letter and digit'
                    break;
                default:
                    break;
            }
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
                    title={errorMsg}
                />
                break;
            default:
                break;
        }
    
        return (
            <div>  
                {this.props.icon ? 
                <div>
                    <div className={inputDivClasses.join(' ')}>    
                        <div className={classes.IconDiv}>
                            <FontAwesomeIcon className={iconClasses.join(' ')} icon={inputIcon} /> 
                        </div>
                        <div className={classes.LabelDiv}>
                            <label className={labelClasses.join(' ')}>{this.props.label}</label>
                            {inputElement}
                        </div>
                    </div> 
                        <div className={classes.BorderBottom}>
                        <CSSTransition
                        timeout={animationTiming}
                        in={this.state.focused}
                        mountOnEnter
                        unmountOnExit
                        classNames={{
                            enter: '',
                            enterActive: classes.BorderBottomFocusedActive,
                            exit: '',
                            exitActive: classes.BorderBottomFocusedInactive
                        }}>
                            <div className={borderBottomClasses.join(' ')}></div>
                        </CSSTransition>
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