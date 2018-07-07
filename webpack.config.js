const path = require('path')

module.exports = {
  entry: ['./public/src/calculate.js', 
  './public/src/order.js', 
  './public/src/payments.js', 
  './public/src/receiptPrinter.js',
  './public/src/init.js'
 ],
    target: 'web',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
         }
       }
     ]
   }
}
