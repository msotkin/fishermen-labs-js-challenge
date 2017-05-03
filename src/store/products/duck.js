import fetch from 'isomorphic-fetch'

//Action Types

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'

//Initial State

const InitialState = {
  phase: 'INIT',
  data: [],
  selected: null,
  error: null
}

//Reducer

export default function reducer(state = InitialState, action = {}) {
  switch (action.type) {

    case FETCH_PRODUCTS:
      return Object.assign({}, state, {
        phase: 'LOADING'
      })

    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        phase: 'SUCCESS',
        data: action.payload
      })

    case FETCH_PRODUCTS_ERROR:
      return Object.assign({}, state, {
        phase: 'ERROR',
        error: action.payload.error
      })

    default: {
      return state
    }
  }
}

//Action Creators

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
})

export const fetchProductsError = (err) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: err
})

export const fetchProducts = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/products')
      .then((res) => res.json())
      .then((payload) => dispatch(fetchProductsSuccess(payload.map((product) => {
        product.cart = false
        return product
      }))))
      .catch((err) => dispatch(fetchProductsError(err)))
  }
}
