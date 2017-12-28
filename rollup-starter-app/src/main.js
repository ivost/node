/*
https://rollupjs.org/#npm-packages
https://www.npmjs.com/package/rollup-plugin-node-resolve
*/

//import { readFileSync } from 'fs';
import fs from 'fs';

import update from './update.js';
import answer from 'the-answer';
import leftPad from 'left-pad';

export default function () {
  console.log('the answer is ' + answer);
}

var p = fs.readFileSync("package.json", "utf8");
console.log(p);

console.log("[" + leftPad('foo', 5) + "]");
console.log('the answer is ' + answer);

update();