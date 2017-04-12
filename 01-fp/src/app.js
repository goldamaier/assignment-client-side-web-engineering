/*jshint esversion: 6 */
import * as hof from './hof';
import * as curry from './curry';
import { TextProcessor } from './monad';

let text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. AENEAN";

console.log("----------------HOF------------------")
console.log(hof.classify(text));
console.log(hof.leetIt(text));
console.log(hof.allSpacesGone(text));
console.log(hof.toLower(text));
console.log(hof.toUpper(text));

console.log("----------------CURRY------------------")
console.log(curry.classify(text));
console.log(curry.leetIt(text));
console.log(curry.allSpacesGone(text));
console.log(curry.toLower(text));
console.log(curry.toUpper(text));

console.log("----------------MONAD------------------")

var asdasd = new TextProcessor(text);

console.log(asdasd.classify().text);
console.log(asdasd.leetIt().text);
