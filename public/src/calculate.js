class Calculate {
    constructor() {
        this.products = {
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

        this._TAXRATE = 8.64
    }
    getTaxRate() {
        return this._TAXRATE
    }

    setTaxRate(newTaxRate) {
        this._TAXRATE = newTaxRate
    }

    getLineTotals(basket) {
        let totals = []
        let lineTotals = []
        let self = this

        basket.map(item => {
            if (self.products.hasOwnProperty(item)) {
                totals.push(self.products[item])
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
            if (self.products.hasOwnProperty(item)) {
                return (Calculate.returnCurrency(total += self.products[item]))
            }
        }, 0)
    }

    getMuffinDiscount(basket) {
        let self = this
        let discount
        let discountedItems = ['Blueberry Muffin',
            'Chocolate Chip Muffin',
            'Muffin Of The Day'
        ]

        discountedItems.some(
            muffin => basket.includes(muffin)
        ) ? (discount = Calculate.returnCurrency(
            (Calculate.returnCurrency(
                self.getBaseTotal(basket) / 100) * 10)
        )) : (discount )
        return Object.is(discount, undefined) ? 0 : discount
    }

    getSpend50Discount(basket) {
        let self = this
        let discount
        if (this.getBaseTotal(basket) >= 50) {
            discount = Calculate.returnCurrency(
                (self.getBaseTotal(basket) / 100) * 5
            )
        }
        return Object.is(discount, undefined) ? 0 : discount
    }

    getSalesTax(basket) {
        let amountToTax = this.getBaseTotal(basket) + this.getMuffinDiscount(basket) + this.getSpend50Discount(basket)
        return Calculate.returnCurrency((amountToTax / 100) * this.getTaxRate())
    }

    getGrandTotal(basket) {
        return Calculate.returnCurrency(this.getBaseTotal(basket) + this.getMuffinDiscount(basket) + this.getSpend50Discount(basket))
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


export default Calculate