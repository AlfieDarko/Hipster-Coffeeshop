class Till {
    constructor(calculate, order, payments, receiptPrinter) {
        this.calculate = calculate
        this.order = order
        this.payments = payments
        this.receiptPrinter = receiptPrinter
    }

    getCustomerName(){
        return this.order.getCustomerName()
    }

    setCustomerName(name){
        this.order.setCustomerName(name)
    }
}

export default Till

