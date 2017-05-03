import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const propTypes = {
  filter: PropTypes.string,
  children: PropTypes.any
}

const FilterLink = ({ filter, children }) => (
  <Link to={`/products/${filter}`}>
    {children}
  </Link>
)

FilterLink.propTypes = propTypes

export default FilterLink
