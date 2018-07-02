const Calculate = require('../src/calculate.js')
const expect = require('chai').expect

describe('Calculate', () => {
  let calculate
  let basket
  describe('.getLineTotals()', () => {
    beforeEach(() => {
      calculate = new Calculate()
    })

    it('returns an array of items and their line totals', () => {
      getBasket = ['Cafe Latte', 'Cappucino']

      expect(getLineTotals(getBasket)).to.eql(['Cafe Latte: £4.75', 'Cappucino: £3.85'])
    })

  })
})
