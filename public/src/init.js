import Calculate from "./calculate";
import Order from "./order"
import Payments from "./payments"
import ReceiptPrinter from "./receiptPrinter"

const calculate = new Calculate()
const order = new Order()
const payments = new Payments()
const receiptPrinter = new ReceiptPrinter(calculate)

