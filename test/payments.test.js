import Payments from '../public/src/payments.js';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Payments', () => {
    let payments
    let grandTotal
    let amount
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

    describe('.getChange()', () => {

        beforeEach(() => {
            payments = new Payments()
        });

        it('returns the correct amount of change of a payment', () => {
            grandTotal = 30
            amount = 40
            expect(payments.getChange(amount, grandTotal)).to.eql(10)
        });
    });
});


