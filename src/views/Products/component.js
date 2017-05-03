import React, { Component, PropTypes } from 'react'

import Item from '../../components/Item'
import FilterLink from '../../components/FilterLink'

export default class Products extends Component {

  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    phase: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired
  }

  componentWillMount() {
    const { phase, fetchProducts } = this.props
    if (phase === 'INIT') fetchProducts()
  }

  render() {
    const { products } = this.props
    const items = products.map((product) => {
      return (
        <FilterLink key={product.id} filter={product.id} >
          <Item key={product.id} product={product} />
        </FilterLink>
      )
    })

    return (
      <div>
        <h1>Products</h1>
        {items}
      </div>
    )
  }
}
