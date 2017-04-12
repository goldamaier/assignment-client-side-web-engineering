/*jshint esversion: 6 */

function TextProcessor(text) {
  this.text = text;
}

TextProcessor.prototype.input = function input(text) {
  this.text = text;
  return this;
};

TextProcessor.prototype.classify = function classify() {
  const result = this.text.replace(/ /ig, "🍷");
  return new TextProcessor(result);
};

TextProcessor.prototype.leetIt = function leetIt() {
  const result = this.text.replace(/e/ig, "3").replace(/A/g, "4");
  return new TextProcessor(result);
};

TextProcessor.prototype.allSpacesGone = function allSpacesGone() {
  const result = this.text.replace(/ /ig, "");
  return new TextProcessor(result);
};


TextProcessor.prototype.classify = function toLower() {
  const result = this.text.toLowerCase();
  return new TextProcessor(result);
};


TextProcessor.prototype.classify = function classify() {
  const result = this.text.toUpperCase();
  return new TextProcessor(result);
};

module.exports = { TextProcessor };
