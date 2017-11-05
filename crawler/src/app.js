const cheerio = require('cheerio');
const _ = require('lodash')
const jsonframe = require('jsonframe-cheerio');
const Horseman = require('node-horseman')
const co = require('co');
/*
https://www.npmjs.com/package/node-horseman
https://github.com/johntitus/node-horseman
https://github.com/johntitus/node-horseman/blob/master/examples/links.js
https://students.technitraderonlinecampus.com/subscriptions/my-subscriptions/
https://wiki.technitraderonlinecampus.com/services:market:2017-11-02
*/
//const UA = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0';

const UA = 'Mozilla/5.0 Firefox/27.0';

const HOST  = 'https://wiki.technitraderonlinecampus.com';
const LOGIN = `https://account.technitraderonlinecampus.com/sign-in`;
const DME   = `${HOST}/services:dme:start`;

const DME2   = `https://wiki.technitraderonlinecampus.com/services:market:2017-11-02`;

const SERV   = `https://wiki.technitraderonlinecampus.com/services:`;

const EMAIL = 'ivostoy@gmail.com';
const PASS = 'Svetlana1`';

function page(h, name) {
  console.log('page ' + name);
  // console.log('url ' + SERV + name);
  return h.open(SERV + name)
  .wait(1000)
  .pdf(`out/${name}.pdf`, {
    format: 'Letter',
    orientation: 'landscape',
    margin: '0.2in',
    header: {
      height: '0.1in',
      contents: function(pageNum, numPages) {
        return `<h3> ${name}         ${pageNum}/${numPages}</h3>`;
      }
    }
  })

}

console.log(`browse to ${LOGIN}`);

const horseman = new Horseman().userAgent(UA);

// var h = horseman.userAgent(UA)
//     .open(LOGIN)
//     .waitForSelector('form')
//     .type('input[name="email"]', EMAIL)
//     .type('input[name="password"]', PASS)
//     .click(`input[value='Login']`)
//     .waitForNextPage()
//     .open(DME)
//     .wait(1000)
//     // .html()
//     // .log()
//     //.waitForSelector('a.wikilink1')
//     .html('a.toc').log()
//     ;

    co(function* () {
      yield horseman
            .open(LOGIN)
            .waitForSelector('form')
            .type('input[name="email"]', EMAIL)
            .type('input[name="password"]', PASS)
            .click(`input[value='Login']`)
            .waitForNextPage()
            ;

      yield horseman.open(DME)

      var html = yield horseman.html();
      console.log(html)
      // parse(html);
      yield horseman.close();
    }).catch(function (e) {
      console.log(e)
    });
    
    // h = page(h, 'market:2017-11-02');

