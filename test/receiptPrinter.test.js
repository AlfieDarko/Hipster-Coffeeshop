const ReceiptPrinter = require('../src/receiptPrinter')
const expect = require('chai').expect
const sinon = require('sinon')

describe('ReceiptPrinter', () => {
    let receiptPrinter
    describe('.getReceipt()', () => {
        beforeEach(() => {
            receiptPrinter = new ReceiptPrinter()
        });
        it('returns an array', () => {
            expect(receiptPrinter.getReceipt()).to.be.an('array')
        });


    });
});