const express = require('express')
const faker = require('faker')

const router = express.Router()
const PRODUCT_COUNT = 10
const products = []

for (let i = 0; i < PRODUCT_COUNT; i++) {
  products.push({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    description: faker.lorem.sentence()
  })
}

router.get('/api/products', (req, res) => {
  res.send(products)
})

module.exports = router
