var Horseman = require('node-horseman');

// https://www.npmjs.com/package/node-horseman
// https://github.com/johntitus/node-horseman
// https://github.com/johntitus/node-horseman/blob/master/examples/links.js
// https://students.technitraderonlinecampus.com/subscriptions/my-subscriptions/

const UA = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0';
const HOST  = 'https://wiki.technitraderonlinecampus.com';
const LOGIN = `https://account.technitraderonlinecampus.com/sign-in`;
const DME   = `${HOST}/services:dme:start`;

const EMAIL = 'ivostoy@gmail.com';
const PASS = 'Svetlana1`';

const horseman = new Horseman();
console.log(`browse to ${LOGIN}`);
const h = horseman
    .userAgent(UA)
    .open(LOGIN)
    .waitForSelector('form')
    .type('input[name="email"]', EMAIL)
    .type('input[name="password"]', PASS)
    .click(`input[value='Login']`)
    //.screenshot('p1.png')
    .wait(2000)
    .open(DME)
    .wait(2000)
    //.html(`a[class='wikilink1']'`).log()
    //.waitForSelector('a.wikilink1')
    .html()
    .log()
    .close();

