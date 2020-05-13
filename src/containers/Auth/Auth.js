import React, {Component} from 'react';
import {connect} from 'react-redux'

import classes from './Auth.module.css'

import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import Background from '../../components/UI/Auth/Background/Background'
import Avatar from '../../components/UI/Auth/Avatar/Avatar'
import Phone from '../../components/UI/Auth/Phone/Phone'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/actions/index'

class Auth extends Component {

    state = {
        form: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: ''
                },
                label: 'Username: ',
                icon: 'user',
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: ''
                },
                label: 'Password: ',
                icon: 'lock',
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        
    }

    inputChangedHandler = (event, inputId) => {
        const updatedformElement = {
            ...this.state.form[inputId],
            value: event.target.value,
            touched: true
        }
        const updatedForm = {
            ...this.state.form,
            [inputId]: updatedformElement
        }
        this.setState({form: updatedForm})
    }

    authHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.form.email.value, this.state.form.password.value)
    }

    render() {
        let formArrayElememts = []
        for (let key in this.state.form) {
            formArrayElememts.push({
                id: key, // not a number but : email or password 
                config: this.state.form[key]
            })
        }
        let formElements = formArrayElememts.map(formElement => {
            return <Input 
            key={formElement.id}
            id ={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.label}
            icon={formElement.config.icon}
            changed={this.inputChangedHandler}
            touched={formElement.config.touched}
            />
        })

        return (
            <div>
                <Background />
                <div className={classes.Container}>
                    <Phone/>
                    <div className={classes.LoginFormContainer}>
                        <form className={classes.LoginForm} onSubmit={this.authHandler}>
                        <Avatar/>
                        <h2>Welcome!</h2>
                            {this.props.loading ? <Spinner loading={this.props.loading} />
                             :
                            (<div>
                                {formElements}
                                <Button type="auth">Login</Button>
                            </div>)
                            }
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);