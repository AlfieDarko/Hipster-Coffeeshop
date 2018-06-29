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

})