import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const propTypes = {
  toggleCart: PropTypes.func,
  product: PropTypes.object,
  displayFull: PropTypes.bool
}

const defaultProps = {
  displayFull: false
}

const Item = ({ toggleCart, product, displayFull }) => {
  return (
    <div key={product.id}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.id}/>
      </Link>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      {displayFull && <p>{product.description}</p>}
      <button onClick={() => toggleCart(product.id)}>
        {product.cart ? 'Remove from ' : 'Add to '}Cart
      </button>
    </div>
  )
}

Item.propTypes = propTypes
Item.defaultProps = defaultProps

export default Item
