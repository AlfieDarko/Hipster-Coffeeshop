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
        return (self.returnCurrency(total += self.products.list()[item]))
      }
    }, 0)
  }

  getDiscount(basket) {
    let self = this
    let discount
    basket.forEach(function (element) {
      if (
        element.includes("Blueberry Muffin") ||
        element.includes("Chocolate Chip Muffin") ||
        element.includes("Muffin Of The Day")
      ) {
        discount = self.returnCurrency((self.returnCurrency(self.getBaseTotal(basket) / 100) * 10))
      } else {
        return
      }
    })
    // let discount2 = ((self.getBaseTotal(basket) / 100) * 10)
    return  Object.is(discount, undefined) ? 0 : discount
  }

  returnCurrency(maths) {
    return parseFloat((new Intl.NumberFormat('gb-GB', {
      maximumSignificantDigits: 3
    }).format(maths)))
  }

  
}


module.exports = Calculate