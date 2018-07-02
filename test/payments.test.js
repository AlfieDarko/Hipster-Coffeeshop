const Payments = require('../src/payments.js');
const expect = require('chai').expect
const sinon = require('sinon')

describe('Payments', () => {
    let payments
    describe('.payGrandTotal()', () => {
        beforeEach(() => {
            payments = new Payments()
        });
        it('throws an error if paramenter is not a number', () => {
            expect(() => payments.payGrandTotal("NUMBERS")).to.throw(TypeError, 'Not a number!');
        });
    });
});