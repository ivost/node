/*
https://rollupjs.org/#npm-packages
*/

import update from './update.js';
import answer from 'the-answer';

export default function () {
  console.log('the answer is ' + answer);
}

console.log('the answer is ' + answer);

update();