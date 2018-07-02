const Products = require('./products.js')
class Calculate {
  constructor(Products) {
    this.products = Products
  }
  getLineTotals(basket) {
    let totals = []
    let lineTotals = []
    let self = this

    basket.map(item => {
      if (self.products.list().hasOwnProperty(item)) {
        totals.push(self.products.list()[item])
      }
    })

    function zipItemsAndPrices(...arrays) {
      const length = Math.min(...arrays.map(arr => arr.length));
      return Array.from({
          length
        },
        (value, index) => arrays.map(array => array[index])
      );
    }

    zipItemsAndPrices(basket, totals).map(
      lineItem => {
        lineTotals.push(`${lineItem[0]}: £${lineItem[1]}`)
      }
    );
    return lineTotals
  }

  getBaseTotal(basket) {
    let self = this
    return basket.reduce((total, item) => {
      if (self.products.list().hasOwnProperty(item)) {
        return (total += self.products.list()[item])
      }
    }, 0)
  }
}
module.exports = Calculate