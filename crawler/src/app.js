const cheerio = require('cheerio');
//const _ = require('lodash')
//const jsonframe = require('jsonframe-cheerio');
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

const HOST = 'https://wiki.technitraderonlinecampus.com';
const LOGIN = `https://account.technitraderonlinecampus.com/sign-in`;
const DME = `${HOST}/services:dme:start`;

const DME2 = `https://wiki.technitraderonlinecampus.com/services:market:2017-11-02`;

const SERV = `https://wiki.technitraderonlinecampus.com/services:`;

const EMAIL = 'ivostoy@gmail.com';
const PASS = 'Svetlana1`';

function parseList(html) {
  let res = [];
  // console.log('parse ' + html);
  let $ = cheerio.load(html)
  const sel = 'div.level2';
  let res2 = $(sel);
  // console.log(res2.length + ' children of ' + sel);

  res2.each(function (i, el) {
    // let x = $(this).html()
    let list = $(this).find('a.wikilink1');
    list.each(function (i, el) {
      res.push({text: $(this).text(), q: el.attribs.href})
    });
  })
  return res;
}

function scrape(h, el) {
  console.log(el);
  // console.log('url ' + SERV + name);
  const name = el.text;
  const dir = ensureDir(name);
  return h.open(SERV + el.q)
    .wait(1000)
    .pdf(`$dir/${name}.pdf`, {
      format: 'Letter',
      orientation: 'landscape',
      margin: '0.2in',
      header: {
        height: '0.1in',
        contents: function (pageNum, numPages) {
          return `<h3> ${name}         ${pageNum}/${numPages}</h3>`;
        }
      }
    })
}

function ensureDir(date) {
	const t = date.split('-');
	const yr = t[0];
	const mon = t[1];
	const day = t[2];
	console.log('ensureDir', yr, mon, day);	
	const path = `./out/${yr}/${mon}`;
	console.log(path);
	mkdirp(path, function(err) { 
		if (err) {
      console.log(err);
    }
  });
  return path;
}

console.log(`browse to ${LOGIN}`);

const horseman = new Horseman().userAgent(UA);

co(function* () {
  // login first
  yield horseman
    .open(LOGIN)
    .waitForSelector('form')
    .type('input[name="email"]', EMAIL)
    .type('input[name="password"]', PASS)
    .click(`input[value='Login']`)
    .waitForNextPage()
    ;
  // get list of articles
  yield horseman.open(DME)
  const html = yield horseman.html();
  const list = parseList(html);
  console.log("got " + list.length + ' articles');
  scrape(h, el[0]);
  scrape(h, el[100]);
  // for (var el in list) {
  //   scrape(h, el);
  // }
  yield horseman.close();
}).catch(function (e) {
  console.log(e)
});


