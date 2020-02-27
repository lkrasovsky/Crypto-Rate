(function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;

  function CryptoCurrency(name, price) {
    this.name = name;
    this.price = price;
  }

  CryptoCurrency.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoCurrency',
    interfaces: []
  };
  CryptoCurrency.prototype.component1 = function () {
    return this.name;
  };
  CryptoCurrency.prototype.component2 = function () {
    return this.price;
  };
  CryptoCurrency.prototype.copy_9sobi5$ = function (name, price) {
    return new CryptoCurrency(name === void 0 ? this.name : name, price === void 0 ? this.price : price);
  };
  CryptoCurrency.prototype.toString = function () {
    return 'CryptoCurrency(name=' + Kotlin.toString(this.name) + (', price=' + Kotlin.toString(this.price)) + ')';
  };
  CryptoCurrency.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.price) | 0;
    return result;
  };
  CryptoCurrency.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.price, other.price)))));
  };

  function main$lambda() {
    println('Listening on port 8080');
    return Unit;
  }

  function main$lambda_0(f, res) {
    return res.send(generateCryptoRates());
  }

  function main() {
    var express = require('express');
    var app = express();
    app.listen(8080, main$lambda);
    app.get('/crypto', main$lambda_0);
  }

  function generateCryptoRates() {
    return [new CryptoCurrency('Bitcoin', 90000.0), new CryptoCurrency('ETH', 1000.0), new CryptoCurrency('TRX', 10.0)];
  }

  _.CryptoCurrency = CryptoCurrency;
  _.main = main;
  _.generateCryptoRates = generateCryptoRates;
  main();
  Kotlin.defineModule('crypto', _);
  return _;
}(module.exports, require('kotlin')));
