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
            // calculateStub = sinon.createStubInstance(Calculate)
            // mockLineTotals = sinon.stub(Calculate.prototype, 'getLineTotals').returns(["Cafe Latte: £4.75"])
            // mockMuffinDiscount = sinon.stub(Calculate.prototype, 'getMuffinDiscount').returns(1)
            // receiptPrinter = new ReceiptPrinter(new Calculate())
        });
        afterEach(() => {
            mockLineTotals.restore()
            mockMuffinDiscount.restore()
        });

        before(() => {
            calculateStub = sinon.createStubInstance(Calculate)
            mockLineTotals = sinon.stub(Calculate.prototype, 'getLineTotals').returns(["Cafe Latte: £4.75"])
            mockMuffinDiscount = sinon.stub(Calculate.prototype, 'getMuffinDiscount').returns(1)
            receiptPrinter = new ReceiptPrinter(new Calculate())

        });
        after(() => {
            mockLineTotals.restore()
            mockMuffinDiscount.restore()
        });
        it('returns an array', () => {
            getBasket = ['Cafe Latte']
            expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array')
        });
        
        describe('>> LineTotals', () => {
            it('returns an array with the line totals', () => {
                getBasket = ['Cafe Latte']
                expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array').that.includes("Cafe Latte: £4.75")
            });
        });
        
        describe('>> MuffinDiscount', () => {
            it('returns an array including muffin discount if it is included', () => {
                getBasket = ['Cafe Latte', 'Blueberry Muffin']
                expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array').that.includes("10% Muffin Discount!")
            });
    
        });

        describe('>> Spend50 Discount', () => {
            before(() => {
                calculateStub = sinon.createStubInstance(Calculate)
                // mockLineTotals = sinon.stub(Calculate.prototype, 'getLineTotals').returns(["Cafe Latte: £4.75"])
                mockSpend50Discount = sinon.stub(Calculate.prototype, 'getSpend50Discount').returns(51)
                receiptPrinter = new ReceiptPrinter(new Calculate())
    
            });
            it('returns an array including the big spender discount', () => {
                getBasket = ['Cafe Latte', 'Cafe Latte','Cafe Latte','Cafe Latte',
                'Cafe Latte','Cafe Latte','Cafe Latte','Cafe Latte','Cafe Latte',
                'Cafe Latte','Cafe Latte','Cafe Latte','Cafe Latte','Cafe Latte',]
                console.log(receiptPrinter.getReceipt(getBasket))
                expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array').that.includes("Hey Big Spender! %5 Discount!")
            });
            after(() => {
                mockSpend50Discount.restore()
            });
    
        });


    });
});