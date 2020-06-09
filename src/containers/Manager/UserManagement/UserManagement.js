import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import axios from '../../../axios';
import * as actions from '../../../store/actions/index';
import UserTable from '../../../components/Tables/UserTable';
import { lightGreen } from '@material-ui/core/colors';

class Users extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    setTimeout(() => {
      axios.get('/api/cashier').then((res) => {
        let tableData = [];
        for (let key in res.data) {
          const { userID, firstName, lastName } = res.data[key];
          tableData.push({ userId: userID, firstName, lastName });
        }
        this.setState({ data: tableData });
        console.log(this.state);
      });
    }, 100);
  }

  onDeleteRow = (event, rowData) => {
    const proceedToDelete = window.confirm(
      'Are you sure you want to delete this user?'
    );
    if (proceedToDelete) {
      const data = [...this.state.data];
      const indexToDelete = data.indexOf(rowData);
      data.splice(indexToDelete, 1);
      this.setState({ data: data });
    }
  };

  onEditRow = (newData, oldData) => {
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
  render() {
    return (
      <div>
        <Helmet>
          <title>Users Management</title>
        </Helmet>
        <UserTable
          data={this.state.data}
          onDelete={this.onDeleteRow}
          onEdit={this.onEditRow}
        />
      </div>
    );
  }
}

export default Users;
