const calculate = require('./calculate')

class ReceiptPrinter {
    constructor(calculate) {
        this.calculate = calculate
    }

    getReceipt(basket){ 
        let receipt = []
        receipt.push(this.calculate.getLineTotals(basket))
        return receipt.reduce((acc, val) => acc.concat(val), [])
    }
}

module.exports = ReceiptPrinter;