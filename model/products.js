const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductsSchema = new Schema({
  id: String,
  name: String,
  price: String,
  image: String,
  description: String
})

module.exports = mongoose.model('Product', ProductsSchema)
