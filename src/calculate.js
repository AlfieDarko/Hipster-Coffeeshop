const Products = require('./products.js')

class Calculate {
  constructor(Products) {
    this.products = Products
    this._TAXRATE = 8.64
  }

  getTaxRate(){
    return this._TAXRATE
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

    Calculate.zipItemsAndPrices(basket, totals).map(
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
        return (Calculate.returnCurrency(total += self.products.list()[item]))
      }
    }, 0)
  }

  getMuffinDiscount(basket) {
    let self = this
    let discount
    basket.forEach(function (element) {
      if (
        element.includes("Blueberry Muffin") ||
        element.includes("Chocolate Chip Muffin") ||
        element.includes("Muffin Of The Day")
      ) {
        discount = Calculate.returnCurrency(
          (Calculate.returnCurrency(self.getBaseTotal(basket) / 100) * 10)
        )
      }
    })
    return Object.is(discount, undefined) ? 0 : discount
  }

  getSpend50Discount(basket) {
    let self = this
    let discount
    if (this.getBaseTotal(basket) >= 50) {
      discount = Calculate.returnCurrency((self.getBaseTotal(basket) / 100) * 5)
    }
    return Object.is(discount, undefined) ? 0 : discount
  }

  getSalesTax(basket){
    let amountToTax = this.getBaseTotal(basket) + this.getMuffinDiscount(basket) + this.getSpend50Discount(basket)
    console.log(this.getTaxRate(), 'taxxxxx')
    return Calculate.returnCurrency((amountToTax / 100) * this.getTaxRate())
  }

  getGrandTotal(basket) {
    return this.getBaseTotal(basket) + this.getMuffinDiscount(basket) + this.getSpend50Discount(basket) 
  }

  

  static returnCurrency(maths) {
    return parseFloat((new Intl.NumberFormat('gb-GB', {
      maximumSignificantDigits: 3
    }).format(maths)))
  }

  static zipItemsAndPrices(...arrays) {
    const length = Math.min(...arrays.map(arr => arr.length));
    return Array.from({
        length
      },
      (value, index) => arrays.map(array => array[index])
    );
  }


}


module.exports = Calculate