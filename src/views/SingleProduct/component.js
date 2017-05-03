import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

import Item from '../../components/Item'

export default class Product extends Component {

  static propTypes = {
    toggleCart: PropTypes.func.isRequired,
    selected: PropTypes.object.isRequired
  }

  render() {
    const { selected, toggleCart } = this.props

    return (
      <div>
        <Link to="/products">Back</Link>
        <h1>Product</h1>
        <Item product={selected} toggleCart={toggleCart} displayFull />
      </div>
    )
  }
}
