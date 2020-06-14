import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import axios from '../../../axios';
import classes from './Inventory.module.css';

import ProductTable from '../../../components/Tables/ProductTable/ProductTable';

class Inventory extends Component {
  state = {
    data: [],
  };
  // Upon rendering component - fetch data from MongoDB
  componentDidMount() {
    this.fetchAPI();
  }

  // Method for fetching data
  fetchAPI = () => {
    setTimeout(() => {
      axios.get('/api/products').then((res) => {
        let tableData = [];
        for (let key in res.data) {
          const { _id, barcode, name, rate, totalQuantity } = res.data[key];
          tableData.push({
            id: _id,
            barcode,
            nameOfProduct: name,
            price: `${rate.$numberDecimal} zl.`,
            rate,
            totalQuantity,
          });
        }
        this.setState({ data: tableData });
      });
    }, 100);
  };

  //Upon clicking delete button in product table - do this:
  onDeleteRow = (event, rowData) => {
    const proceedToDelete = window.confirm(
      'Are you sure you want to delete this product?'
    );
    console.log(rowData);

    if (proceedToDelete) {
      const productId = rowData.id;
      axios.delete(`/api/products/${productId}`);

      const data = [...this.state.data];
      const indexToDelete = data.indexOf(rowData);
      data.splice(indexToDelete, 1);
      this.setState({ data: data });
    }
  };
  // Upon edit icon is clicked in product table - do this:
  onEditRow = (newData, oldData) => {
    const productId = newData.id;
    const priceIndex = newData.price.indexOf('z');
    const price = newData.price.slice(0, priceIndex);

    const rate = {
      $numberDecimal: price,
    };

    axios.put(`/api/products/${productId}`, {
      name: newData.nameOfProduct,
      rate: rate,
      totalQuantity: newData.totalQuantity,
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
  render() {
    return (
      <div>
        <Helmet>
          <title>Inventory Management</title>
        </Helmet>
        <ProductTable
          data={this.state.data}
          onDelete={this.onDeleteRow}
          onEdit={this.onEditRow}
        />
      </div>
    );
  }
}
export default Inventory;
