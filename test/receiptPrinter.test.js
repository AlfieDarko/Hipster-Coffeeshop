const ReceiptPrinter = require('../src/receiptPrinter')
const Calculate = require('../src/calculate')
const expect = require('chai').expect
const sinon = require('sinon')

describe('ReceiptPrinter', () => {
    let receiptPrinter
    let calculateStub
    let mockLineTotals
    describe('.getReceipt()', () => {
        beforeEach(() => {
            calculateStub = sinon.createStubInstance(Calculate)
            mockLineTotals = sinon.stub(Calculate.prototype, 'getLineTotals').returns(["Cafe Latte: £4.75"])
            mockMuffinDiscount = sinon.stub(Calculate.prototype, 'getMuffinDiscount').returns(1)

            receiptPrinter = new ReceiptPrinter(new Calculate())
        });
        afterEach(() => {
            mockLineTotals.restore()
            mockMuffinDiscount.restore()
        });
        it('returns an array', () => {
            getBasket = ['Cafe Latte']
            expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array')
        });

        it('returns an array with the line totals', () => {
            getBasket = ['Cafe Latte']
            expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array').that.includes("Cafe Latte: £4.75")
        });

        it('returns an array including muffin discount if it is included', () => {
            getBasket = ['Cafe Latte', 'Blueberry Muffin']
            expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array').that.includes("10% Muffin Discount!")
        });


    });
});