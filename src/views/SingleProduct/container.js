import { connect } from 'react-redux'

import { toggleCart } from '../../store/app/duck'

import SingleProduct from './component'

const selectProduct = (products, filter) => {
  return products.filter((product) => product.id === filter)[0]
}

const ProductsContainer = connect(
  //Map state to props
  (state, ownProps) => ({
    selected: selectProduct(state.app.data, ownProps.match.params.id)
  }),
  //Map actions to dispatch and props
  { toggleCart }
)(SingleProduct)

export default ProductsContainer
