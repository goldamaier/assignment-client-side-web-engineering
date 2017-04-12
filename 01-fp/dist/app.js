(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _hof = require('./hof');

var hof = _interopRequireWildcard(_hof);

var _curry = require('./curry');

var curry = _interopRequireWildcard(_curry);

var _monad = require('./monad');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. AENEAN"; /*jshint esversion: 6 */


console.log("----------------HOF------------------");
console.log(hof.classify(text));
console.log(hof.leetIt(text));
console.log(hof.allSpacesGone(text));
console.log(hof.toLower(text));
console.log(hof.toUpper(text));

console.log("----------------CURRY------------------");
console.log(curry.classify(text));
console.log(curry.leetIt(text));
console.log(curry.allSpacesGone(text));
console.log(curry.toLower(text));
console.log(curry.toUpper(text));

console.log("----------------MONAD------------------");

var asdasd = new _monad.TextProcessor(text);

console.log(asdasd.classify().text);
console.log(asdasd.leetIt().text);

},{"./curry":2,"./hof":3,"./monad":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*jshint esversion: 6 */
var textProcess = function textProcess(original) {
  return function (replacement) {
    return function (source) {
      return source.replace(original, replacement);
    };
  };
};

var classify = textProcess(/ /ig)("🍷");
var leetIt = textProcess(/e/ig)("3");
var allSpacesGone = textProcess(/ /ig)("");
var toLower = textProcess(/([A-Z]+)/g)(function (s) {
  return s.toLowerCase();
}); //String.fromCharCode(s.charCodeAt()+32);});
var toUpper = textProcess(/([a-z]+)/g)(function (s) {
  return s.toUpperCase();
});

exports.classify = classify;
exports.leetIt = leetIt;
exports.allSpacesGone = allSpacesGone;
exports.toLower = toLower;
exports.toUpper = toUpper;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*jshint esversion: 6 */
// A higher-order function is:
// a function that takes one or more functions as arguments
// a function that returns a function

var textProcess = function textProcess(original, replacement, source) {
  return function (source) {
    return source.replace(original, replacement);
  };
};

// /i suffix says that the regex is case insensitive
var classify = textProcess(/ /ig, "🍷");
var leetIt = textProcess(/e/ig, "3");
var allSpacesGone = textProcess(/ /ig, "");
var toLower = textProcess(/([A-Z]+)/g, function (s) {
  return s.toLowerCase();
}); //String.fromCharCode(s.charCodeAt()+32);});
var toUpper = textProcess(/([a-z]+)/g, function (s) {
  return s.toUpperCase();
});

exports.classify = classify;
exports.leetIt = leetIt;
exports.allSpacesGone = allSpacesGone;
exports.toLower = toLower;
exports.toUpper = toUpper;

},{}],4:[function(require,module,exports){
"use strict";

/*jshint esversion: 6 */

function TextProcessor(text) {
  this.text = text;
}

TextProcessor.prototype.input = function input(text) {
  this.text = text;
  return this;
};

TextProcessor.prototype.classify = function classify() {
  var result = this.text.replace(/ /ig, "🍷");
  return new TextProcessor(result);
};

TextProcessor.prototype.leetIt = function leetIt() {
  var result = this.text.replace(/e/ig, "3").replace(/A/g, "4");
  return new TextProcessor(result);
};

TextProcessor.prototype.allSpacesGone = function allSpacesGone() {
  var result = this.text.replace(/ /ig, "");
  return new TextProcessor(result);
};

TextProcessor.prototype.classify = function toLower() {
  var result = this.text.toLowerCase();
  return new TextProcessor(result);
};

TextProcessor.prototype.classify = function classify() {
  var result = this.text.toUpperCase();
  return new TextProcessor(result);
};

module.exports = { TextProcessor: TextProcessor };

},{}]},{},[1]);
