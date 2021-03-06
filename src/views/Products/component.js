import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

import Item from '../../components/Item'

export default class Products extends Component {

  static propTypes = {
    toggleCart: PropTypes.func.isRequired,
    phase: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    error: PropTypes.object
  }

  render() {
    const { products, phase, toggleCart } = this.props
    const items = products.map((product) => {
      return (
        <Item key={product.id} product={product} toggleCart={toggleCart} />
      )
    })

    return (
      (phase === 'SUCCESS') &&
          <div>
            <h1>Products</h1>
            <Link to="/cart">Cart</Link>
            {items}
          </div>
    )
  }
}
