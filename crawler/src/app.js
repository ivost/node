var Horseman = require('node-horseman');
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
  console.log('url ' + SERV + name);
  return h.open(SERV + name)
  .wait(1000)
  .pdf(`out/test.pdf`, {
    format: 'Letter',
    orientation: 'landscape',
    margin: '0.2in',
    header: {
      height: '0.1in',
      contents: function(pageNum, numPages) {
        console.log('contents');
        return `<h3> ${name}         ${pageNum}/${numPages}</h3>`;
      }
    }
  })

}

console.log(`browse to ${LOGIN}`);

const horseman = new Horseman();
var h = horseman.userAgent(UA)
    .open(LOGIN)
    .waitForSelector('form')
    .type('input[name="email"]', EMAIL)
    .type('input[name="password"]', PASS)
    .click(`input[value='Login']`)
    .wait(1000);
    //.screenshot('out/p1.png')
    // h.open(DME2)
    // .wait(1000)
    // .pdf(`out/test.pdf`)
    // ;

    h = page(h, 'market:2017-11-02');

    //.html(`a[class='wikilink1']'`).log()
    //.waitForSelector('a.wikilink1')
    //.html()
    //.log()

    h.close();

