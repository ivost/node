/*
https://rollupjs.org/#npm-packages
*/

import update from './update.js';
import answer from 'the-answer';
import leftPad from 'left-pad';

export default function () {
  console.log('the answer is ' + answer);
}

console.log("[" + leftPad('foo', 5) + "]");
console.log('the answer is ' + answer);

update();