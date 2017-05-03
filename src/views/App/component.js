import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'

import Products from '../Products/container'
import SingleProduct from '../SingleProduct/container'

export default class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Redirect to="/products" />} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={SingleProduct} />
      </div>
    )
  }
}
