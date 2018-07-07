/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/src/calculate.js":
/*!*********************************!*\
  !*** ./public/src/calculate.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Calculate = function () {\n    function Calculate() {\n        _classCallCheck(this, Calculate);\n\n        this.products = {\n            'Cafe Latte': 4.75,\n            'Flat White': 4.75,\n            'Cappucino': 3.85,\n            'Single Espresso': 2.05,\n            'Double Espresso': 3.75,\n            'Americano': 3.75,\n            'Cortado': 4.55,\n            'Tea': 3.65,\n            'Choc Mudcake': 6.4,\n            'Choc Mousse': 8.2,\n            'Affogato': 14.8,\n            'Tiramisu': 11.4,\n            'Blueberry Muffin': 4.05,\n            'Chocolate Chip Muffin': 4.05,\n            'Muffin Of The Day': 4.55\n        };\n\n        this._TAXRATE = 8.64;\n    }\n\n    _createClass(Calculate, [{\n        key: 'getTaxRate',\n        value: function getTaxRate() {\n            return this._TAXRATE;\n        }\n    }, {\n        key: 'setTaxRate',\n        value: function setTaxRate(newTaxRate) {\n            this._TAXRATE = newTaxRate;\n        }\n    }, {\n        key: 'getLineTotals',\n        value: function getLineTotals(basket) {\n            var totals = [];\n            var lineTotals = [];\n            var self = this;\n\n            basket.map(function (item) {\n                if (self.products.hasOwnProperty(item)) {\n                    totals.push(self.products[item]);\n                }\n            });\n\n            Calculate.zipItemsAndPrices(basket, totals).map(function (lineItem) {\n                lineTotals.push(lineItem[0] + ': \\xA3' + lineItem[1]);\n            });\n            return lineTotals;\n        }\n    }, {\n        key: 'getBaseTotal',\n        value: function getBaseTotal(basket) {\n            var self = this;\n            return basket.reduce(function (total, item) {\n                if (self.products.hasOwnProperty(item)) {\n                    return Calculate.returnCurrency(total += self.products[item]);\n                }\n            }, 0);\n        }\n    }, {\n        key: 'getMuffinDiscount',\n        value: function getMuffinDiscount(basket) {\n            var self = this;\n            var discount = void 0;\n            var discountedItems = ['Blueberry Muffin', 'Chocolate Chip Muffin', 'Muffin Of The Day'];\n\n            discountedItems.some(function (muffin) {\n                return basket.includes(muffin);\n            }) ? discount = Calculate.returnCurrency(Calculate.returnCurrency(self.getBaseTotal(basket) / 100) * 10) : discount;\n            return Object.is(discount, undefined) ? 0 : discount;\n        }\n    }, {\n        key: 'getSpend50Discount',\n        value: function getSpend50Discount(basket) {\n            var self = this;\n            var discount = void 0;\n            if (this.getBaseTotal(basket) >= 50) {\n                discount = Calculate.returnCurrency(self.getBaseTotal(basket) / 100 * 5);\n            }\n            return Object.is(discount, undefined) ? 0 : discount;\n        }\n    }, {\n        key: 'getSalesTax',\n        value: function getSalesTax(basket) {\n            var amountToTax = this.getBaseTotal(basket) + this.getMuffinDiscount(basket) + this.getSpend50Discount(basket);\n            return Calculate.returnCurrency(amountToTax / 100 * this.getTaxRate());\n        }\n    }, {\n        key: 'getGrandTotal',\n        value: function getGrandTotal(basket) {\n            return Calculate.returnCurrency(this.getBaseTotal(basket) + this.getMuffinDiscount(basket) + this.getSpend50Discount(basket));\n        }\n    }], [{\n        key: 'returnCurrency',\n        value: function returnCurrency(maths) {\n            return parseFloat(new Intl.NumberFormat('gb-GB', {\n                maximumSignificantDigits: 3\n            }).format(maths));\n        }\n    }, {\n        key: 'zipItemsAndPrices',\n        value: function zipItemsAndPrices() {\n            for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {\n                arrays[_key] = arguments[_key];\n            }\n\n            var length = Math.min.apply(Math, _toConsumableArray(arrays.map(function (arr) {\n                return arr.length;\n            })));\n            return Array.from({\n                length: length\n            }, function (value, index) {\n                return arrays.map(function (array) {\n                    return array[index];\n                });\n            });\n        }\n    }]);\n\n    return Calculate;\n}();\n\nexports.default = Calculate;\n\n//# sourceURL=webpack:///./public/src/calculate.js?");

/***/ }),

/***/ "./public/src/init.js":
/*!****************************!*\
  !*** ./public/src/init.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _calculate = __webpack_require__(/*! ./calculate */ \"./public/src/calculate.js\");\n\nvar _calculate2 = _interopRequireDefault(_calculate);\n\nvar _order = __webpack_require__(/*! ./order */ \"./public/src/order.js\");\n\nvar _order2 = _interopRequireDefault(_order);\n\nvar _payments = __webpack_require__(/*! ./payments */ \"./public/src/payments.js\");\n\nvar _payments2 = _interopRequireDefault(_payments);\n\nvar _receiptPrinter = __webpack_require__(/*! ./receiptPrinter */ \"./public/src/receiptPrinter.js\");\n\nvar _receiptPrinter2 = _interopRequireDefault(_receiptPrinter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar calculate = new _calculate2.default();\nvar order = new _order2.default();\nvar payments = new _payments2.default();\nvar receiptPrinter = new _receiptPrinter2.default(calculate);\n\nconsole.log(\"everything loaded\");\n\n//# sourceURL=webpack:///./public/src/init.js?");

/***/ }),

/***/ "./public/src/order.js":
/*!*****************************!*\
  !*** ./public/src/order.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Order = function () {\n  function Order() {\n    _classCallCheck(this, Order);\n\n    var _customerName = void 0;\n    var _basket = [];\n  }\n\n  _createClass(Order, [{\n    key: \"setCustomerName\",\n    value: function setCustomerName(name) {\n      this._customerName = name;\n    }\n  }, {\n    key: \"getCustomerName\",\n    value: function getCustomerName() {\n      return this._customerName;\n    }\n  }, {\n    key: \"resetCustomerName\",\n    value: function resetCustomerName() {\n      this._customerName = null;\n    }\n  }, {\n    key: \"setBasket\",\n    value: function setBasket(arrayOfProducts) {\n      this._basket = arrayOfProducts;\n    }\n  }, {\n    key: \"getBasket\",\n    value: function getBasket() {\n      return this._basket;\n    }\n  }, {\n    key: \"resetBasket\",\n    value: function resetBasket() {\n      this._basket.length = 0;\n    }\n  }]);\n\n  return Order;\n}();\n\nexports.default = Order;\n\n//# sourceURL=webpack:///./public/src/order.js?");

/***/ }),

/***/ "./public/src/payments.js":
/*!********************************!*\
  !*** ./public/src/payments.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Payments = function () {\n    function Payments() {\n        _classCallCheck(this, Payments);\n    }\n\n    _createClass(Payments, [{\n        key: 'payGrandTotal',\n        value: function payGrandTotal(amount, grandTotal) {\n            if (typeof amount !== 'number') {\n                throw new TypeError('Not a number!');\n            }\n\n            if (amount < grandTotal) {\n                throw new Error(\"Not enough to make payment\");\n            }\n            return true;\n        }\n    }, {\n        key: 'getChange',\n        value: function getChange(amount, grandTotal) {\n            return amount - grandTotal;\n        }\n    }]);\n\n    return Payments;\n}();\n\nexports.default = Payments;\n\n//# sourceURL=webpack:///./public/src/payments.js?");

/***/ }),

/***/ "./public/src/receiptPrinter.js":
/*!**************************************!*\
  !*** ./public/src/receiptPrinter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _calculate = __webpack_require__(/*! ./calculate.js */ \"./public/src/calculate.js\");\n\nvar _calculate2 = _interopRequireDefault(_calculate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ReceiptPrinter = function () {\n    function ReceiptPrinter(calculate) {\n        _classCallCheck(this, ReceiptPrinter);\n\n        this.calculate = calculate;\n        this._MUFFIN_DISCOUNT_STRING = \"10% Muffin Discount!\";\n        this._BIG_SPEND_DISCOUNT_STRING = \"Hey Big Spender! %5 Discount!\";\n        this.receipt = {};\n    }\n\n    _createClass(ReceiptPrinter, [{\n        key: \"getReceipt\",\n        value: function getReceipt(basket) {\n            this.addLineTotalsToReceipt(basket);\n            this.addMuffinDiscountToReceipt(basket);\n            this.addBigSpenderDiscountToReceipt(basket);\n            this.addSalesTaxToReceipt(basket);\n            this.addGrandTotalToReceipt(basket);\n            return this.receipt;\n            // return receipt.reduce((acc, val) => acc.concat(val), [])\n        }\n    }, {\n        key: \"addGrandTotalToReceipt\",\n        value: function addGrandTotalToReceipt(basket) {\n            this.receipt.grandTotal = this.calculate.getGrandTotal(basket);\n        }\n    }, {\n        key: \"addLineTotalsToReceipt\",\n        value: function addLineTotalsToReceipt(basket) {\n            this.receipt.lineTotals = this.calculate.getLineTotals(basket);\n        }\n    }, {\n        key: \"addMuffinDiscountToReceipt\",\n        value: function addMuffinDiscountToReceipt(basket) {\n            this.printMuffinString(basket) ? this.receipt.muffinDiscount = this.printMuffinString(basket) : this.receipt.muffinDiscount;\n        }\n    }, {\n        key: \"addBigSpenderDiscountToReceipt\",\n        value: function addBigSpenderDiscountToReceipt(basket) {\n            this.printBigSpenderString(basket) ? this.receipt.bigSpendDiscount = this.printBigSpenderString(basket) : this.receipt.bigSpendDiscount;\n        }\n    }, {\n        key: \"addSalesTaxToReceipt\",\n        value: function addSalesTaxToReceipt(basket) {\n            this.receipt.salesTax = this.calculate.getSalesTax(basket);\n        }\n    }, {\n        key: \"printMuffinString\",\n        value: function printMuffinString(basket) {\n            if (this.calculate.getMuffinDiscount(basket) > 0) return this._MUFFIN_DISCOUNT_STRING;else return false;\n        }\n    }, {\n        key: \"printBigSpenderString\",\n        value: function printBigSpenderString(basket) {\n            if (this.calculate.getSpend50Discount(basket) > 50) return this._BIG_SPEND_DISCOUNT_STRING;else return false;\n        }\n    }]);\n\n    return ReceiptPrinter;\n}();\n\nexports.default = ReceiptPrinter;\n\n//# sourceURL=webpack:///./public/src/receiptPrinter.js?");

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************!*\
  !*** multi ./public/src/calculate.js ./public/src/order.js ./public/src/payments.js ./public/src/receiptPrinter.js ./public/src/init.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./public/src/calculate.js */\"./public/src/calculate.js\");\n__webpack_require__(/*! ./public/src/order.js */\"./public/src/order.js\");\n__webpack_require__(/*! ./public/src/payments.js */\"./public/src/payments.js\");\n__webpack_require__(/*! ./public/src/receiptPrinter.js */\"./public/src/receiptPrinter.js\");\nmodule.exports = __webpack_require__(/*! ./public/src/init.js */\"./public/src/init.js\");\n\n\n//# sourceURL=webpack:///multi_./public/src/calculate.js_./public/src/order.js_./public/src/payments.js_./public/src/receiptPrinter.js_./public/src/init.js?");

/***/ })

/******/ });