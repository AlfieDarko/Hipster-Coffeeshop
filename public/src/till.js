class Till {
  constructor(calculate, order, payments, receiptPrinter) {
    this.calculate = calculate;
    this.order = order;
    this.payments = payments;
    this.receiptPrinter = receiptPrinter;
  }

  getCustomerName() {
    return this.order.getCustomerName();
  }

  setCustomerName(name) {
    this.order.setCustomerName(name);
  }

  setBasket(arrayOfProducts) {
    this.order.setBasket(arrayOfProducts);
  }

  getBasket() {
    return this.order.getBasket();
  }

  resetBasket() {
    this.order.resetBasket();
  }

  getGrandTotal(basket) {
    return this.calculate.getGrandTotal(basket);
  }
}

export default Till;
