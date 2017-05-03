import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

import Item from '../../components/Item'

export default class Cart extends Component {

  static propTypes = {
    toggleCart: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
  }

  render() {
    const { products, toggleCart } = this.props
    const items = products.map((product) => {
      return (
        <Item key={product.id} product={product} toggleCart={toggleCart} />
      )
    })

    return (
      <div>
        <h1>Cart</h1>
        <Link to="/products">Products</Link>
        {items}
      </div>
    )
  }
}
