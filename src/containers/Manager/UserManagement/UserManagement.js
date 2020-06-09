import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import axios from '../../../axios';
import * as actions from '../../../store/actions/index';
import UserTable from '../../../components/Tables/UserTable';

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
      });
    }, 500);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Users Management</title>
        </Helmet>
        <UserTable data={this.state.data} />
      </div>
    );
  }
}

export default Users;
