import { connect } from 'react-redux'

import { selectProduct } from '../../store/products/duck'

import Products from './component'

const ProductContainer = connect(
  //Map state to props
  () => ({}),
  //Map actions to dispatch and props
  { selectProduct }
)(Products)

export default ProductContainer
