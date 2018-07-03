const ReceiptPrinter = require('../src/receiptPrinter')
const Calculate = require('../src/calculate')
const expect = require('chai').expect
const sinon = require('sinon')


describe('ReceiptPrinter', () => {
    let receiptPrinter
    let calculateStub
    let mockLineTotals
    describe('.getReceipt()', () => {

        describe('> LineTotals', () => {
            beforeEach(() => {
                receiptPrinter = new ReceiptPrinter(new Calculate())
                mockLineTotals = sinon.stub(Calculate.prototype, 'getLineTotals').returns(['Cafe Latte: £4.75'])
            });
            after(() => {
                mockLineTotals.restore()
            });

            it('returns an object with the line totals', () => {
                getBasket = ['Cafe Latte']
                expect(receiptPrinter.getReceipt(getBasket)).to.be.an('object').that.eql({
                    lineTotals: ['Cafe Latte: £4.75'],
                    salesTax: 0.41
                })
            });
        });


        describe('> Muffin Discount', () => {
            beforeEach(() => {
                receiptPrinter = new ReceiptPrinter(new Calculate())
                mockMuffinDiscount = sinon.stub(Calculate.prototype, 'getMuffinDiscount').returns(3.40)
                mockLineTotals = sinon.stub(Calculate.prototype, 'getLineTotals').returns(['Cafe Latte', 'Chocolate Chip Muffin'])

            });
            it('returns an object including muffin discount if it is included', () => {
                getBasket = ['Cafe Latte', 'Chocolate Chip Muffin']
                expect(receiptPrinter.getReceipt(getBasket)).to.be.an('object').to.eql({
                    lineTotals: ['Cafe Latte', 'Chocolate Chip Muffin'],
                    muffinDiscount: "10% Muffin Discount!",
                    salesTax: 1.05
                })

            });
            afterEach(() => {
                mockLineTotals.restore()
                mockMuffinDiscount.restore()
            });

        });

        describe('> Spend Over 50 Discount', () => {
            beforeEach(() => {
                calculateStub = sinon.createStubInstance(Calculate)
                mockSpend50Discount = sinon.stub(Calculate.prototype, 'getSpend50Discount').returns(51)
                receiptPrinter = new ReceiptPrinter(new Calculate())
            });
            it('returns an object including the big spender discount', () => {
                getBasket = ['Cafe Latte', 'Cafe Latte', 'Cafe Latte', 'Cafe Latte',
                    'Cafe Latte', 'Cafe Latte', 'Cafe Latte', 'Cafe Latte', 'Cafe Latte',
                    'Cafe Latte', 'Cafe Latte', 'Cafe Latte', 'Cafe Latte', 'Cafe Latte',
                ]
                expect(receiptPrinter.getReceipt(getBasket))
                    .to.be.an('object').to.eql({
                        lineTotals: ['Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75',
                            'Cafe Latte: £4.75'
                        ],
                        bigSpendDiscount: 'Hey Big Spender! %5 Discount!',
                        salesTax: 10.2
                    })
            });
            afterEach(() => {
                mockSpend50Discount.restore()
            });
        });

        describe('> Tax Amount', () => {
            before(() => {
                calculateStub = sinon.createStubInstance(Calculate)
                mockGetTaxRate = sinon.stub(Calculate.prototype, 'getTaxRate').returns(8.64)
                mockGetSalesTax = sinon.stub(Calculate.prototype, 'getSalesTax').returns(1.51)
                receiptPrinter = new ReceiptPrinter(new Calculate())
            });
            it('returns an object including amount to Tax', () => {
                getBasket = ['Cafe Latte', 'Cafe Latte']
                expect(receiptPrinter.getReceipt(getBasket))
                    .to.be.an('object').to.eql({
                        lineTotals: ['Cafe Latte: £4.75', 'Cafe Latte: £4.75'],
                        salesTax: 1.51
                    })
            });
            after(() => {
                mockGetTaxRate.restore()
                mockGetSalesTax.restore()
            });
        });
    });
});