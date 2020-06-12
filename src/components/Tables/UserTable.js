import React, { PureComponent } from 'react';
import MaterialTable from 'material-table';

import { forwardRef } from 'react';

import classes from './UserTable.module.css';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { TablePagination } from '@material-ui/core';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

class UserTable extends PureComponent {
  state = {
    title: 'List of cashiers',
    columns: [
      {
        title: 'User ID',
        field: 'userId',
        filtering: false,
        sorting: false,
        editable: 'never',
        width: 200,
        cellStyle: {
          borderRight: '1px solid #DCDCDC',
        },
      },
      {
        title: 'First Name',
        field: 'firstName',
        cellStyle: {
          borderRight: '1px solid #DCDCDC',
        },
      },
      {
        title: 'Last Name',
        field: 'lastName',
        cellStyle: {
          borderRight: '1px solid #DCDCDC',
        },
      },
    ],
    actions: [
      {
        icon: tableIcons.Delete,
        tooltip: 'Delete user',
        onClick: (event, rowData) => this.props.onDelete(event, rowData),
      },
    ],
    options: {
      actionsColumnIndex: -1,
      pageSize: 10,
      headerStyle: {
        backgroundColor: '#E0E0E0',
        color: '#696969',
        border: '1px solid #888888',
      },
      rowStyle: (rowData) => ({
        backgroundColor:
          this.state.selectedRow === rowData.tableData.id ? '#EEE' : '#FFF',
      }),
    },
    editable: {
      onRowUpdate: (newData, oldData) => this.props.onEdit(newData, oldData),
    },
    selectedRow: null,
    data: [],
  };

  componentDidUpdate() {
    this.setState({ data: this.props.data });
  }

  render() {
    return (
      <div className={classes.Table}>
        <MaterialTable
          components={{
            Pagination: (props) => (
              <TablePagination {...props} rowsPerPageOptions={[5, 10]} />
            ),
          }}
          icons={tableIcons}
          title={this.state.title}
          columns={this.state.columns}
          data={this.state.data}
          actions={this.state.actions}
          editable={this.state.editable}
          options={this.state.options}
          onRowClick={(e, selectedRow) => {
            this.setState({ selectedRow: selectedRow.tableData.id });
          }}
        />
      </div>
    );
  }
}
export default UserTable;
