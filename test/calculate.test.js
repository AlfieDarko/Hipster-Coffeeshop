import Calculate from '../public/src/calculate.js';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Calculate', () => {
  let calculate
  let getBasket
  let stubProducts
  describe('.getLineTotals()', () => {
    beforeEach(() => {
      calculate = new Calculate()
    })

    afterEach(() => {

    });

    it('returns an array of items and their line totals', () => {
      getBasket = ['Cafe Latte', 'Cappucino']

      expect(calculate.getLineTotals(getBasket)).to.eql(["Cafe Latte: £4.75", "Cappucino: £3.85"])
    })

  })

  describe('.calculateBaseTotal()', () => {
    beforeEach(() => {

      calculate = new Calculate()
    })

    it('calculates the base total for the items in the basket', () => {
      getBasket = ['Cafe Latte', 'Cappucino']

      expect(calculate.getBaseTotal(getBasket)).to.eql(8.60)
    });

  });

  describe('.getMuffinDiscount()', () => {
    beforeEach(() => {
      calculate = new Calculate()

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

  describe('.getSpend50Discount()', () => {
    beforeEach(() => {
      calculate = new Calculate()

    });

    it('returns discount amount of 10% (6.64 )from total when basket is over £50 (66.40)', () => {
      getBasket = ['Affogato', 'Tiramisu', 'Cafe Latte', 'Choc Mousse', 'Choc Mudcake', 'Cortado', 'Tiramisu', 'Flat White']
      // Full price is £66.40
      expect(calculate.getSpend50Discount(getBasket)).to.eql(3.32)
    });
  });

  describe('.getSalesTax()', () => {
    let getBasket 
    calculate = new Calculate()

    });

    it('returns the amount of Tax to be paid on multiple items', () => {
      getBasket = ['Affogato', 'Tiramisu', 'Cafe Latte', 'Choc Mousse', 'Choc Mudcake', 'Cortado', 'Tiramisu', 'Flat White']

      expect(calculate.getSalesTax(getBasket)).to.eql(6.02)
    });

    it('returns the amount of Tax to be paid on a single items', () => {
      getBasket = ['Affogato']

      expect(calculate.getSalesTax(getBasket)).to.eql(1.28)
    });

  });

  describe('.getGrandTotal()', () => {
    let calculate
    let getBasket
    beforeEach(() => {
      calculate = new Calculate()

    });

    it('returns the grand total of one item', () => {
      getBasket = ['Affogato']

      expect(calculate.getGrandTotal(getBasket)).to.eql(14.8)
    });

    it('returns the grand total of two identical', () => {
      getBasket = ['Affogato', 'Affogato']
      expect(calculate.getGrandTotal(getBasket)).to.eql(29.6)
    });

    it('returns the grand total of multiple different items', () => {
      getBasket = ['Affogato', 'Tea', 'Tiramisu', 'Choc Mousse']
      expect(calculate.getGrandTotal(getBasket)).to.eql(38.1)
    });
  });

  describe('.getTaxRate()', () => {
    let calculate
    beforeEach(() => {
      calculate = new Calculate()

    });
      it('returns a TAXRATE of 8.64', () => {
        expect(calculate.getTaxRate()).to.eql(8.64)
      });
  });

  describe('.setTaxRate()', () => {
    let calculate
    beforeEach(() => {
      calculate = new Calculate()

    });
    it('sets a TAXRATE of 10', () => {
      calculate.setTaxRate(10)
      expect(calculate.getTaxRate()).to.eql(10)
    });
  });


