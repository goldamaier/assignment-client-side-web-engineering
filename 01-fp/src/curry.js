/*jshint esversion: 6 */
const textProcess = (original) => {
  return (replacement) => {
    return (source) => {
      return source.replace(original, replacement);
    };
  };
};

const classify = textProcess(/ /ig)("🍷");
const leetIt = textProcess(/e/ig)("3");
const allSpacesGone = textProcess(/ /ig)("");
const toLower = textProcess(/([A-Z]+)/g)(function(s){return s.toLowerCase()}); //String.fromCharCode(s.charCodeAt()+32);});
const toUpper = textProcess(/([a-z]+)/g)(function(s){return s.toUpperCase()});

export {
	classify,
  leetIt,
	allSpacesGone,
	toLower,
	toUpper
};
