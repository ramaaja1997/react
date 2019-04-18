import React, { Component } from 'react';
import './Product.css';
import logo from './logo.svg';
import './App.css';

class Product extends React.Component {
  render() {
    return (
      <div className="box">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="ungu">{this.props.judul}</h1>
            <h2 className="merah">{this.props.harga} </h2>
            <button className="btn btn-blue">Tambah Keranjang</button>
      </div>
    );
  }
}

export default Product;
