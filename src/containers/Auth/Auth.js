import React, {Component} from 'react';

import classes from './Auth.module.css'

import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import Background from '../../components/UI/Auth/Background/Background'
import Avatar from '../../components/UI/Auth/Avatar/Avatar'
import Phone from '../../components/UI/Auth/Phone/Phone'

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Username'
                },
                label: 'Username: ',
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
                    placeholder: 'Password'
                },
                label: 'Password: ',
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


    render() {
        let formArrayElememts = []
        for (let key in this.state.controls) {
            formArrayElememts.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        let formElements = formArrayElememts.map(formElement => {
            return <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.label}
            />
        })




        return (
            <div>
                <Background />
                <div className={classes.Container}>
                    <Phone/>
                    <div className={classes.LoginFormContainer}>
                        <form className={classes.LoginForm}>
                        <Avatar/>
                        <h2>Welcome!</h2>
                        {formElements}
                        <Button type="auth">Login</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default Auth;