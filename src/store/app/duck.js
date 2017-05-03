import fetch from 'isomorphic-fetch'

//Action Types

export const FETCH_PRODUCTS = 'fishermen/app/FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'fishermen/app/FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'fishermen/app/FETCH_PRODUCTS_ERROR'

export const TOGGLE_CART = 'fishermen/app/TOGGLE_CART'

//Initial State

const InitialState = {
  phase: 'INIT',
  data: [],
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

    case TOGGLE_CART:
      return Object.assign({}, state, {
        data: state.data.map((product) => {
          if (product.id === action.payload) {
            return Object.assign({}, product, {
              cart: !product.cart
            })
          }
          return product
        })
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

export const toggleCart = (id) => ({
  type: TOGGLE_CART,
  payload: id
})
