import { connect } from 'react-redux'

import { toggleCart } from '../../store/app/duck'

import Products from './component'

const ProductContainer = connect(
  //Map state to props
  () => ({}),
  //Map actions to dispatch and props
  { toggleCart }
)(Products)

export default ProductContainer
