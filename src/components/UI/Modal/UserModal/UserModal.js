import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import classes from './UserModal.module.css';
import ModalWindow from '../Modal';

class UserModal extends Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    disableButton: true,
  };

  onInputChange = (e) => {
    switch (e.target.id) {
      case 'firstName':
        this.setState({ firstName: e.target.value });
        break;
      case 'lastName':
        this.setState({ lastName: e.target.value });
        break;
      case 'password':
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
    this.setState({ disableButton: this.allFieldsNotEmpty() });
  };

  allFieldsNotEmpty = () => {
    return (
      this.state.firstName === '' ||
      this.state.lastName === '' ||
      this.state.password === ''
    );
  };
  buttonClickHandler = (e) => {
    const { firstName, lastName, password } = this.state;
    this.props.submit(firstName, lastName, password, e);
  };

  render() {
    return (
      <ModalWindow show={this.props.open} closeModal={this.props.onClose}>
        <div className={classes.Container} autoComplete='off'>
          <h2 className={classes.Title}>
            Register new employee in application
          </h2>
          <TextField
            fullWidth
            margin='dense'
            label='Fist Name'
            id='firstName'
            onChange={(e) => this.onInputChange(e)}
          />
          <TextField
            fullWidth
            margin='dense'
            label='Last Name'
            id='lastName'
            onChange={(e) => this.onInputChange(e)}
          />
          <TextField
            fullWidth
            margin='dense'
            label='Password'
            id='password'
            type='password'
            onChange={(e) => this.onInputChange(e)}
          />
          <button
            type='submit'
            className={classes.Button}
            disabled={this.state.disableButton}
            onClick={(e) => this.buttonClickHandler(e)}>
            Submit
          </button>
        </div>
      </ModalWindow>
    );
  }
}

export default UserModal;
