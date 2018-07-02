class Payments {

    payGrandTotal(amount, grandTotal) {
        if (typeof(amount) !== 'number') {
            throw new TypeError('Not a number!');
        }

        if (amount < grandTotal) {
            throw new Error("Not enough to make payment");
          }
    
    }
}

module.exports = Payments;