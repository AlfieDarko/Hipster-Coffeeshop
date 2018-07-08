import ReceiptPrinter from '../public/src/receiptPrinter';
import Calculate, { prototype } from '../public/src/calculate';
import { expect } from 'chai';
import { stub, createStubInstance } from 'sinon';


describe('ReceiptPrinter', () => {
    let calculate
    let receiptPrinter
    let calculateStub
    let mockLineTotals
    let mockGetGrandTotal
    let getBasket
    describe('.getReceipt()', () => {

        describe('> LineTotals', () => {
            beforeEach(() => {
                receiptPrinter = new ReceiptPrinter(new Calculate())
                mockLineTotals = stub(Calculate.prototype, 'getLineTotals').returns(['Cafe Latte: £4.75'])
                mockGetGrandTotal = stub(Calculate.prototype, 'getGrandTotal').returns(4.75)
            });
            after(() => {
                mockLineTotals.restore()
                mockGetGrandTotal.restore()
            });

            it('returns an object with the line totals', () => {
                getBasket = ['Cafe Latte']
                expect(receiptPrinter.getReceipt(getBasket)).to.be.an('object').that.eql({
                    lineTotals: ['Cafe Latte: £4.75'],
                    salesTax: 0.41,
                    grandTotal: 4.75
                })
            });
        });


        describe('> Muffin Discount', () => {
            let mockMuffinDiscount
            let mockGetGrandTotal
            beforeEach(() => {
                receiptPrinter = new ReceiptPrinter(new Calculate())
                mockMuffinDiscount = stub(Calculate.prototype, 'getMuffinDiscount').returns(3.40)
                mockLineTotals = stub(Calculate.prototype, 'getLineTotals').returns(['Cafe Latte', 'Chocolate Chip Muffin'])

                mockGetGrandTotal = stub(Calculate.prototype, 'getGrandTotal').returns(12.2)

            });
            it('returns an object including muffin discount if it is included', () => {
                getBasket = ['Cafe Latte', 'Chocolate Chip Muffin']
                expect(receiptPrinter.getReceipt(getBasket)).to.be.an('object').to.eql({
                    lineTotals: ['Cafe Latte', 'Chocolate Chip Muffin'],
                    muffinDiscount: "10% Muffin Discount!",
                    salesTax: 1.05,
                    grandTotal: 12.2
                })

            });
            afterEach(() => {
                mockGetGrandTotal.restore()
                mockLineTotals.restore()
                mockMuffinDiscount.restore()
            });

        });

        describe('> Spend Over 50 Discount', () => {
            let mockSpend50Discount
            let mockGetGrandTotal
            beforeEach(() => {
                calculateStub = createStubInstance(Calculate)
                mockSpend50Discount = stub(Calculate.prototype, 'getSpend50Discount').returns(51)
                receiptPrinter = new ReceiptPrinter(new Calculate())
                mockGetGrandTotal = stub(Calculate.prototype, 'getGrandTotal').returns(128.20)

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
                        salesTax: 10.2,
                        grandTotal: 128.20

                    })
            });
            afterEach(() => {
                mockGetGrandTotal.restore()
                mockSpend50Discount.restore()
            });
        });

        describe('> Tax Amount', () => {
            let mockGetTaxRate
            let mockGetSalesTax
            let mockGetGrandTotal
            before(() => {
                calculateStub = createStubInstance(Calculate)
                mockGetTaxRate = stub(Calculate.prototype, 'getTaxRate').returns(8.64)
                mockGetSalesTax = stub(Calculate.prototype, 'getSalesTax').returns(1.51)
                mockGetGrandTotal = stub(Calculate.prototype, 'getGrandTotal').returns(11.01)

                receiptPrinter = new ReceiptPrinter(new Calculate())
            });
            it('returns an object including amount to Tax', () => {
                getBasket = ['Cafe Latte', 'Cafe Latte']
                expect(receiptPrinter.getReceipt(getBasket))
                    .to.be.an('object').to.eql({
                        lineTotals: ['Cafe Latte: £4.75', 'Cafe Latte: £4.75'],
                        salesTax: 1.51,
                        grandTotal: 11.01

                    })
            });
            after(() => {
                mockGetGrandTotal.restore()
                mockGetTaxRate.restore()
                mockGetSalesTax.restore()
            });
        });

        describe('> Grand Total', () => {
            let mockGetTaxRate
            let mockGetSalesTax
            let mockGetGrandTotal
            before(() => {

                calculateStub = createStubInstance(Calculate)
                mockGetTaxRate = stub(Calculate.prototype, 'getTaxRate').returns(8.64)
                mockGetSalesTax = stub(Calculate.prototype, 'getSalesTax').returns(1.51)
                mockGetGrandTotal = stub(Calculate.prototype, 'getGrandTotal').returns(11.01)

                receiptPrinter = new ReceiptPrinter(new Calculate())
            });
            it('returns an object including the grand Total', () => {
                getBasket = ['Cafe Latte', 'Cafe Latte']
                expect(receiptPrinter.getReceipt(getBasket))
                    .to.be.an('object').to.eql({
                        lineTotals: ['Cafe Latte: £4.75', 'Cafe Latte: £4.75'],
                        salesTax: 1.51, 
                        grandTotal: 11.01
                    })
            });
            after(() => {
                mockGetGrandTotal.restore()
                mockGetTaxRate.restore()
                mockGetSalesTax.restore()
            });
        });

    });
});