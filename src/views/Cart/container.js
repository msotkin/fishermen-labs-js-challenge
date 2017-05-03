import { connect } from 'react-redux'

import { toggleCart } from '../../store/app/duck'

import Cart from './component'

const inCart = (products) => products.filter((product) => product.cart)

const CartContainer = connect(
  //Map state to props
  (state) => ({
    products: inCart(state.app.data)
  }),
  //Map actions to dispatch and props
  { toggleCart }
)(Cart)

export default CartContainer
