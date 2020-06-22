import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from '../../../axios';

import Modal from '../../../components/UI/Modal/Modal';
import classes from './Billing.module.css';
import BillingSystem from '../../../components/Tables/Billing/Billing';

class Billing extends Component {
  state = {
    data: null,
    totalPrice: 0,
    openModal: false,
  };
  // Fetching data
  fetchAPI = () => {
    setTimeout(() => {
      axios.get('/api/currentBill').then((res) => {
        let tableData = [];
        for (let key in res.data) {
          const { _id, name, rate, totalQuantity } = res.data[key];
          tableData.push({
            id: _id,
            nameOfProduct: name,
            price: `${rate.$numberDecimal} zl.`,
            rate,
            quantity: totalQuantity,
          });
        }
        this.setState({ data: tableData }, () => {
          this.countTotalPrice();
        });
      });
    }, 100);
  };

  countTotalPrice = () => {
    let totalPrice = 0;
    for (let element of this.state.data) {
      totalPrice += +element.rate.$numberDecimal * element.quantity;
    }
    this.setState({ totalPrice: totalPrice });
  };

  componentDidMount() {
    this.fetchAPI();
    this.polling = setInterval(() => {
      this.fetchAPI();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.polling);
  }
  //Upon clicking delete button in  billing system - do this:
  onDeleteRow = (event, rowData) => {
    const proceedToDelete = window.confirm(
      'Are you sure you want to delete this product?'
    );
    console.log(rowData);
    if (proceedToDelete) {
      const productId = rowData.id;
      axios.delete(`/api/currentBill/${productId}`);

      const data = [...this.state.data];
      const indexToDelete = data.indexOf(rowData);
      data.splice(indexToDelete, 1);
      this.setState({ data: data });
    }
  };

  // Upon edit icon is clicked in product table - do this:
  onEditRow = (newData, oldData) => {
    const productId = newData.id;

    axios.put(`/api/currentBill/${productId}`, {
      quantity: newData.quantity,
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = [...this.state.data];
        const indexToUpdate = data.indexOf(oldData);
        data[indexToUpdate] = newData;
        this.setState({ data: data }, () => {
          this.countTotalPrice();
        });
        resolve();
      }, 400);
    });
  };

  payClickHandler = () => {
    this.setState({ openModal: true });
    axios.delete('/api/currentBill').then((res) => {
      console.log('Items cleared');
    });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };
  render() {
    return (
      <div>
        <Helmet>
          <title>Billing System</title>
        </Helmet>
        <BillingSystem
          data={this.state.data}
          onDelete={this.onDeleteRow}
          onEdit={this.onEditRow}
        />
        <div className={classes.Footer}>
          <h2 className={classes.Text}>
            Total Price: {this.state.totalPrice}zl.{' '}
          </h2>
          <button className={classes.Button} onClick={this.payClickHandler}>
            Pay
          </button>
        </div>
        <Modal show={this.state.openModal} closeModal={this.closeModal}>
          <div className={classes.ModalContainer}>
            <h2 className={classes.ModalText}>
              Thank you for attending our shop!
            </h2>
            <button className={classes.Button} onClick={this.closeModal}>
              Continue
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Billing;
