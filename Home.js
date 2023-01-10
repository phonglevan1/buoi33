import React, { Component } from 'react'
import Cart from './Cart'
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Shopping Online</h1>
        <button className='btn btn-success'>Giỏ Hàng (0)</button>
        <ProductList />
        <ProductDetail />
        <Cart />
      </div>
    );
  }
}

export default Home;
