const Order = require("../src/order.js")
const expect = require("chai")
describe('Order', () => {
    describe('.setCustomerName', () => {

        expect(Order.setCustomerName()).to.eql(0)
    })
})