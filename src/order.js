class Order {
  constructor(){
    let _customerName
    let _basket = []
  }


  setCustomerName(name){
    this._customerName = name;
  }

  getCustomerName(){
    return this._customerName
  }

  setBasket(arrayOfProducts){
     this._basket = arrayOfProducts
  }

  getBasket(){
    return this._basket
  }

  resetBasket(){
    this._basket.length = 0
  }


}

module.exports = Order
