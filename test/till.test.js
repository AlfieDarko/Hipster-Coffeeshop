import Till from '../public/src/till';
import Calculate from '../public/src/calculate';
import Order from '../public/src/order';
import Payments from '../public/src/payments';
import ReceiptPrinter from '../public/src/receiptPrinter';
import { expect } from 'chai';
import sinon from 'sinon';


describe('Till', () => {
    describe('interfaces and hides implementations of internal classes', () => {
        describe('.getCustomerName', () => {
            let till
            let calculate, order, payments, receiptPrinter
        
            beforeEach(() => {
                calculate = new Calculate()
                order = new Order()
                payments = new Payments()
                receiptPrinter = new ReceiptPrinter(calculate)
                till = new Till(calculate, order, payments, receiptPrinter)
            });
            it('gets the customers name from the order class', () => {
                console.log(till)
                till.setCustomerName('Jane')
                expect(till.getCustomerName()).to.eql('Jane')
            });
        });
    });
});