class Order {
    constructor(){
        let _customerName
    }

    setCustomerName(name){
        this._customerName = name;
    }

    getCustomerName(){
        return this._customerName
    }

}

module.exports = Order