import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import classes from './UserManagement.module.css';
import axios from '../../../axios';
import UserTable from '../../../components/Tables/UserTable/UserTable';
import UserModal from '../../../components/UI/Modal/UserModal/UserModal';

class Users extends Component {
  state = {
    data: [],
    openModal: false,
  };

  // On Mounting component - Fetch data from MongoDB
  componentDidMount() {
    this.fetchAPI();
  }

  // Method for fetching Data
  fetchAPI = () => {
    setTimeout(() => {
      axios.get('/api/cashier').then((res) => {
        let tableData = [];
        for (let key in res.data) {
          const { _id, userID, firstName, lastName } = res.data[key];
          tableData.push({ id: _id, userId: userID, firstName, lastName });
        }
        this.setState({ data: tableData });
      });
    }, 100);
  };

  // Upon clicking Delete icon in the table - do this:
  onDeleteRow = (event, rowData) => {
    const proceedToDelete = window.confirm(
      'Are you sure you want to delete this user?'
    );
    if (proceedToDelete) {
      const userId = rowData.id;
      axios.delete(`/api/cashier/${userId}`);

      const data = [...this.state.data];
      const indexToDelete = data.indexOf(rowData);
      data.splice(indexToDelete, 1);
      this.setState({ data: data });
    }
  };

  // Upon clicking Edit button in the table - do this:
  onEditRow = (newData, oldData) => {
    const userId = newData.id;

    axios.put(`/api/cashier/${userId}`, {
      firstName: newData.firstName,
      lastName: newData.lastName,
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = [...this.state.data];
        const indexToUpdate = data.indexOf(oldData);
        data[indexToUpdate] = newData;
        this.setState({ data: data });
        resolve();
      }, 400);
    });
  };

  //Upon clicking Register new Employee button - do this:
  onAddRow = (firstName, lastName, password, e) => {
    e.preventDefault();
    axios
      .post('/api/cashier', {
        firstName: firstName,
        lastName: lastName,
        password: password,
      })
      .then((res) => {
        this.setState({ openModal: false });
        this.fetchAPI();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  // Modal open handler
  openModalHandler = () => {
    this.setState({ openModal: true });
  };
  // Modal close handler
  closeModalHandler = () => {
    this.setState({ openModal: false });
  };
  render() {
    return (
      <div>
        <div className={classes.Container}>
          <Helmet>
            <title>User Management</title>
          </Helmet>

          <UserTable
            data={this.state.data}
            onDelete={this.onDeleteRow}
            onEdit={this.onEditRow}
          />
          <button className={classes.Button} onClick={this.openModalHandler}>
            Register new employee
          </button>
        </div>
        <UserModal
          open={this.state.openModal}
          onClose={this.closeModalHandler}
          submit={this.onAddRow}
        />
      </div>
    );
  }
}

export default Users;
