import React, { Component, PropTypes } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Products from '../Products/container'
import SingleProduct from '../SingleProduct/container'
import Cart from '../Cart/container'

export default class App extends Component {

  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    phase: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    error: PropTypes.object
  }

  componentWillMount() {
    const { phase, fetchProducts } = this.props
    if (phase === 'INIT') fetchProducts()
  }

  render() {

    return (
      <div>
        <Route exact path="/" render={() => <Redirect to="/products" />} />
        <Route
          exact path="/products"
          render={() => <Products {...this.props} />}
        />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
      </div>
    )
  }
}
