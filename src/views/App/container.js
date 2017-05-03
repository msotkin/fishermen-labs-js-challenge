import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchProducts } from '../../store/app/duck'

import App from './component'

const AppContainer = withRouter(connect(
  //Map state to props
  (state) => ({
    phase: state.app.phase,
    products: state.app.data,
    error: state.app.error
  }),
  //Map actions to dispatch and props
  { fetchProducts }
)(App))

export default AppContainer
