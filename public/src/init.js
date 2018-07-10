import Calculate from "./calculate";
import Order from "./order";
import Payments from "./payments";
import ReceiptPrinter from "./receiptPrinter";
import Till from "./till";
import Buttons from "./buttons";
import click_events from "./click_events";

const calculate = new Calculate();
const order = new Order();
const payments = new Payments();
const receiptPrinter = new ReceiptPrinter(calculate);
const till = new Till(calculate, order, payments, receiptPrinter);
const buttons = new Buttons(till);

$(document).ready(function() {
  $("#add-name-button").click(function() {
    let customerNameInput = $("#customer-names-input").val();
    buttons.addName(customerNameInput);
  });

  $("#add-to-cart-button").click(function() {
    buttons.addToCart();
  });

  $("#clear-cart-button").click(function() {
    buttons.clearCart();
  });
});
console.log("drogba");
