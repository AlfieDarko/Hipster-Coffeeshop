const calculate = require('./calculate')

class ReceiptPrinter {
    constructor(calculate) {
        this.calculate = calculate
    }

    getReceipt(basket){
        let receipt = [] 
        const MUFFIN_DISCOUNT = "10% Muffin Discount!"
        const BIG_SPEND_DISCOUNT = "Hey Big Spender! %5 Discount!"

        receipt.push(this.calculate.getLineTotals(basket))
        if (this.calculate.getMuffinDiscount(basket) > 0) receipt.push(MUFFIN_DISCOUNT)
        if (this.calculate.getSpend50Discount(basket) > 50) receipt.push(BIG_SPEND_DISCOUNT)

        return receipt.reduce((acc, val) => acc.concat(val), [])
    }
}

module.exports = ReceiptPrinter;