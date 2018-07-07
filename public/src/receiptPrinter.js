class ReceiptPrinter {
    constructor(calculate) {
        this.calculate = calculate
        this._MUFFIN_DISCOUNT_STRING = "10% Muffin Discount!"
        this._BIG_SPEND_DISCOUNT_STRING = "Hey Big Spender! %5 Discount!"
        this.receipt = {}
    }

    getReceipt(basket){
        this.addLineTotalsToReceipt(basket)
        this.addMuffinDiscountToReceipt(basket)
        this.addBigSpenderDiscountToReceipt(basket)
        this.addSalesTaxToReceipt(basket)
        this.addGrandTotalToReceipt(basket)
        return this.receipt
        // return receipt.reduce((acc, val) => acc.concat(val), [])
    }
    addGrandTotalToReceipt(basket){ 
        this.receipt.grandTotal = this.calculate.getGrandTotal(basket)
    }
     addLineTotalsToReceipt(basket) {
        this.receipt.lineTotals = this.calculate.getLineTotals(basket)

    }

     addMuffinDiscountToReceipt(basket){
        this.printMuffinString(basket) ?
        this.receipt.muffinDiscount = this.printMuffinString(basket)
        : ( this.receipt.muffinDiscount )
    }

     addBigSpenderDiscountToReceipt(basket){
        this.printBigSpenderString(basket) ? 
        this.receipt.bigSpendDiscount = this.printBigSpenderString(basket)
        : ( this.receipt.bigSpendDiscount )
    }

     addSalesTaxToReceipt(basket){
        this.receipt.salesTax = this.calculate.getSalesTax(basket)
    }

     printMuffinString (basket) {
        if (this.calculate.getMuffinDiscount(basket) > 0 ) return this._MUFFIN_DISCOUNT_STRING
        else return false
    }

     printBigSpenderString(basket){
        if (this.calculate.getSpend50Discount(basket) > 50) return this._BIG_SPEND_DISCOUNT_STRING
        else return false
    }
}

export default ReceiptPrinter;