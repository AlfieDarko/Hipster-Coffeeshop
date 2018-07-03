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
            receiptPrinter = new ReceiptPrinter(new Calculate())
        });
        afterEach(() => {
            mockLineTotals.restore()
        });
        it('returns an array', () => {
            console.log(calculateStub)
            getBasket = ['Cafe Latte']
            expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array')
        });

        it('returns an array with the line totals', () => {
            console.log(calculateStub)
            getBasket = ['Cafe Latte']
            expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array').that.includes("Cafe Latte: £4.75")
        });


    });
});