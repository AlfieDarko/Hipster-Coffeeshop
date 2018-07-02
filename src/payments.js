class Payments {

    payGrandTotal(amount) {
        if (typeof(amount) !== Number) {
            throw new TypeError('Not a number!');
        }
    }
}

module.exports = Payments;