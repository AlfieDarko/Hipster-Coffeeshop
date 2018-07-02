const Payments = require('../src/payments.js');
const expect = require('chai').expect
const sinon = require('sinon')

describe('Payments', () => {
    let payments
    let grandTotal
    describe('.payGrandTotal()', () => {
        beforeEach(() => {
            payments = new Payments()
        });

        it('throws an error if parameter is not a number', () => {
            expect(() => payments.payGrandTotal("NUMBERS")).to.throw(TypeError, 'Not a number!');
        });

        it('throws an error if money is not enough', () => {
            grandTotal = 30
            amount = 20
            expect(() => payments.payGrandTotal(amount, grandTotal)).to.throw(Error, 'Not enough to make payment');
        })

        it('returns true if payment is accepted', () => {
            grandTotal = 30
            amount = 40
            expect(payments.payGrandTotal(amount, grandTotal)).to.eql(true)
        });

    });
});


