const Calculate = require('../src/calculate.js')
const Products = require('../src/products.js')
const expect = require('chai').expect
const sinon = require('sinon')

describe('Calculate', () => {
  let calculate
  let basket
  let stubProducts
  describe('.getLineTotals()', () => {
    beforeEach(() => {
      stubProductsInstance = sinon.createStubInstance(Products)
      stubProductsInstance.list = sinon.stub().returns({
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
      })
      calculate = new Calculate(stubProductsInstance)
    })

    afterEach(() => {
      // stubProductsInstance.restore()
    });

    it('returns an array of items and their line totals', () => {
      getBasket = ['Cafe Latte', 'Cappucino']

      expect(calculate.getLineTotals(getBasket)).to.eql(["Cafe Latte: £4.75", "Cappucino: £3.85"])
    })

  })

  describe('.calculateBaseTotal()', () => {
    beforeEach(() => {
      stubProductsInstance = sinon.createStubInstance(Products)
      stubProductsInstance.list = sinon.stub().returns({
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
      })
      calculate = new Calculate(stubProductsInstance)
    })

    it('calculates the base total for the items in the basket', () => {
      getBasket = ['Cafe Latte', 'Cappucino']

      expect(calculate.getBaseTotal(getBasket)).to.eql(8.60)

    });

  });

  describe('.getMuffinDiscount()', () => {
    beforeEach(() => {
      stubProductsInstance = sinon.createStubInstance(Products)
      stubProductsInstance.list = sinon.stub().returns({
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
      });
    });

    it('returns discount amount of 10% from total when basket holds a muffin Item', () => {
      getBasket = ['Single Espresso', 'Cortado', 'Blueberry Muffin']
      expect(calculate.getMuffinDiscount(getBasket)).to.eql(1.07)
    })

    it('returns 0 as discount amount when the basket doesnt hold a muffin', () => {
      getBasket = ['Single Espresso', 'Cortado']
      expect(calculate.getMuffinDiscount(getBasket)).to.eql(0)

    });
  })

})