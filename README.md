[![Build Status](https://travis-ci.org/AlfieDarko/Hipster-Coffeeshop.svg?branch=devTillClass)](https://travis-ci.org/AlfieDarko/Hipster-Coffeeshop)
[![Maintainability](https://api.codeclimate.com/v1/badges/2970c8c7a9e776e19e83/maintainability)](https://codeclimate.com/github/AlfieDarko/Hipster-Coffeeshop/maintainability)

## Hipster Coffee Shop Till

> We want to sell tills to a local hipster coffee shop who are finally embracing the 21st century. We need a new till to replace their vintage machines - unfortunately, hipster staff are too cool to learn a new system, so we need you to build something that they will understand.

## Specification

## Version 1

Implement a system that contains the business logic to produce receipts similar to this, based on a `json` price list and test orders. A sample `.json` [file](hipstercoffee.json) has been provided with the list of products sold at this particular coffee shop.

Here are some sample orders you can try - whether you use this information is up to you:

> **Jane**  
> 2 x Cafe Latte  
> 1 x Blueberry Muffin  
> 1 x Choc Mudcake
>
> **John**  
> 4 x Americano  
> 2 x Tiramisu  
> 5 x Blueberry Muffin

Your receipt must calculate and show the correct amount of tax (in this shop's case, 8.64%), as well as correct line totals and total amount. Do not worry about calculating discounts or change yet. Consider what output formats may be suitable.

## Version 2

- Add functionality to take payment and calculate correct change.
- Add functionality to handle discounts - in this example, a 5% discount on orders over $50, and a 10% muffin discount.

## Version 3

Implement a user interface that can actually be used as a till.

You may use whatever technologies you see fit.

##

##

##Tech Used

Code:
Javascript
JQuery
NodeJS
Express
Webpack
Babel
Eslint

TravisCI (CI)
CodeClimate (Code Quality)
Mocha (Unit / Integration Testing)
Sinon (Unit Testing)
TestCafe (End-to-end)

## Usage Example

Till interface:

![Hipster Till](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.32.13.png)

<br>
1. Enter the customers name<br>

![Enter customer name](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.32.22.png)

2.  Select items in the item list and then add to cart when complete!<br>

![add to cart](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.32.27.png)<br>

3.  When the items are added, they will show up on the cart list. You can clear the cart and start again if you make a mistake.<br>

![add to cart2](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.32.44.png)<br>

4.  After adding items to the cart, the total amount is displayed on the till display screen. We can now take cash payments to pay for the customers purchase. Press the Pay Now button<br>

![till display](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.33.09.png)
<br>

5.  We can now enter the amount the customer wants to pay.<br>

![pay by cash](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.33.23.png)<br>

6.  If you have paid enough, a printout of the customers items, with the line totals, pre and post tax totals, along with any discounts they may have received depending on their spending or items. You will also see the amount given and a calculation of the exact change.<br>

![receipt](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.33.32.png)<br>

## Approach

As my second go at this challenge, I was able to go over things I things I could have done better the first time round and implement them into this.

## Meta

Alfie Darko – me@alfiedarko.co.uk

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/AlfieDarko/Till-Tech-Test](https://github.com/AlfieDarko/Till-Tech-Test)

## Contributing

1.  Fork it (<https://github.com/AlfieDarko/Till-Tech-Test/fork>)
2.  Create your feature branch (`git checkout -b feature/fooBar`)
3.  Commit your changes (`git commit -am 'Add some fooBar'`)
4.  Push to the branch (`git push origin feature/fooBar`)
5.  Create a new Pull Request
