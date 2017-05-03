import { connect } from 'react-redux'

import { fetchProducts } from '../../store/products/duck'

import Products from './component'

const ProductsContainer = connect(
  //Map state to props
  (state) => ({
    phase: state.products.phase,
    products: state.products.data,
    error: state.products.error
  }),
  //Map actions to dispatch and props
  { fetchProducts }
)(Products)

export default ProductsContainer
