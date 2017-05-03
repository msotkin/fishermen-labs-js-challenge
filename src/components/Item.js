import React, { PropTypes } from 'react'

const propTypes = {
  product: PropTypes.object,
  displayFull: PropTypes.bool
}

const defaultProps = {
  displayFull: false
}

const Item = ({ product, displayFull }) => {
  return (
    <div key={product.id}>
      <img src={product.image} alt={product.id}/>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      {displayFull && <p>{product.description}</p>}
    </div>
  )
}

Item.propTypes = propTypes
Item.defaultProps = defaultProps

export default Item
