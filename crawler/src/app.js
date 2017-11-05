const cheerio = require('cheerio');
//const _ = require('lodash')
//const jsonframe = require('jsonframe-cheerio');
const Horseman = require('node-horseman')
const co = require('co');
const mkdirp = require('mkdirp');
var prefix = '';
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
//const DME = `${HOST}/services:dme:start`;
const DME2 = `https://wiki.technitraderonlinecampus.com/services:market:2017-11-02`;
// const SERV = `https://wiki.technitraderonlinecampus.com/services:`;
const EMAIL = 'ivostoy@gmail.com';
const PASS = 'Svetlana1`';

function parseList(html) {
  let res = [];
  // console.log('parse ' + html);
  let $ = cheerio.load(html)
  const sel = 'div.level2';
  let res2 = $(sel);

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
  const name = `${prefix}-${el.text}`;
  const dir = ensureDir(name);
  const url = HOST + el.q;
  const path = `${dir}/${name}.pdf`;
  console.log('url ' + url + ', path ' + path);
  return h.open(url)
    .wait(1000)
    //.pdf(path);
    .pdf(path, {
      format: 'Letter',
      orientation: 'portrait',
      margin: '0.5in',
      header: {
        height: '3cm',
        contents: function(pageNum, numPages) {
          if (pageNum == 1) {
            return '';
          }
          return '<h3>Header ' + pageNum + ' / ' + numPages + '</h3>';
        }
      },
      footer: {
        height: '3cm',
        contents: function(pageNum, numPages) {
          if (pageNum == 1) {
            return '';
          }
          return '<h3>Footer ' + pageNum + ' / ' + numPages + '</h3>';
        }
      }
        });
}

function ensureDir(date) {
	console.log('ensureDir', date);	
	const t = date.split('-');
	const yr = t[1];
	const mon = t[2];
	// const day = t[3];
	//console.log('ensureDir', yr, mon);	
	const path = `./out/${yr}/${mon}`;
	console.log('ensureDir', path);
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
  /*
  prefix = 'dme';
  prefix = 'market';
  prefix = 'ptw';
  //fixme
  prefix = 'ltpd';
  */
  prefix = 'ltpd';
  prefix = 'dme';
  
  const URL = `${HOST}/services:${prefix}:start`;

  yield horseman.open(URL)
  const html = yield horseman.html();
  const list = parseList(html);
  console.log("got " + list.length + ' ' + prefix + ' articles');
  yield scrape(horseman, list[0]);
  // yield scrape(horseman, list[100]);
  // yield scrape(horseman, list[400]);
  // for (var el in list) {
  //   yield horseman.wait(2000);
  //   scrape(horseman, el);
  // }
  yield horseman.close();
}).catch(function (e) {
  console.log(e)
});


