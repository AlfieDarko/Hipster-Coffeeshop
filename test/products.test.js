const Products = require('../src/products.js')
const expect = require('chai').expect

describe('Products', () => {
  let products
  let objectToReturn
  describe('.list()', () => {
    beforeEach(() => {
      products = new Products()
    })

    it('returns an object of the CoffeeShop products', () => {
      objectToReturn = {
        'Cafe Latte': 4.75,
        'Flat White': 4.75,
        'Cappucino': 3.85,
        'Single Espresso': 2.05,
        'Double Espresso': 3.75,
        'Americano': 3.75,
        'Cortado': 4.55,
        'Tea': 3.65,
        'Choc Mudcake': 6.4,
        'Choc Mousse': 8.2,
        'Affogato': 14.8,
        'Tiramisu': 11.4,
        'Blueberry Muffin': 4.05,
        'Chocolate Chip Muffin': 4.05,
        'Muffin Of The Day': 4.55
      }
      expect(products.list()).to.eql(objectToReturn)
    })
  })
})
