const Order = require("../src/order.js")
const expect = require("chai").expect
describe('Order', () => {
    describe('.setCustomerName()', () => {
        beforeEach(() => {
            order = new Order()
        })
    
    
        it('sets the Customer Name of this order as James', () => {
            order.setCustomerName("James")
            expect(order.getCustomerName()).to.eql("James")
        })

    })
    describe('.getCustomerName()', () => {
        beforeEach(() => {
            order = new Order()
        })

        it('gets the Customer Name as set by setCustomerName()', () => {
            order.setCustomerName("Anna")
            expect(order.getCustomerName()).to.eql("Anna")
        })
    })

    describe('.setBasket()', () => {
        beforeEach(() => {
            order = new Order()
        })

        it('sets basket with items', () => {
            order.setBasket(["Cafe Latte"])
            expect(order.getBasket()).to.eql(["Cafe Latte"])
        })
    })


})