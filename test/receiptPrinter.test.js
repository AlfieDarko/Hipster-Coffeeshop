const ReceiptPrinter = require('../src/receiptPrinter')
const Calculate = require('../src/calculate')
const Products = require('../src/products')
const expect = require('chai').expect
const sinon = require('sinon')

describe('ReceiptPrinter', () => {
    let receiptPrinter
    describe('.getReceipt()', () => {
        beforeEach(() => {
            receiptPrinter = new ReceiptPrinter(new Calculate(new Products()))
        });
        it('returns an array', () => {
            getBasket = ['Cafe Latte']
            expect(receiptPrinter.getReceipt(getBasket)).to.be.an('array')
        });


    });
});