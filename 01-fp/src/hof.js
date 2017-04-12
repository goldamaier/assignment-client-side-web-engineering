/*jshint esversion: 6 */
// A higher-order function is:
// a function that takes one or more functions as arguments
// a function that returns a function

const textProcess = (original, replacement, source) => {
  return (source) => {
    return source.replace(original, replacement);
  };
};

// /i suffix says that the regex is case insensitive
const classify = textProcess(/ /ig, "🍷");
const leetIt = textProcess(/e/ig, "3");
const allSpacesGone = textProcess(/ /ig, "");
const toLower = textProcess(/([A-Z]+)/g, function(s){return s.toLowerCase()}); //String.fromCharCode(s.charCodeAt()+32);});
const toUpper = textProcess(/([a-z]+)/g, function(s){return s.toUpperCase()});

export {
	classify,
  leetIt,
	allSpacesGone,
	toLower,
	toUpper
};
