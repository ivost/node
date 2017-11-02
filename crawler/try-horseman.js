var Horseman = require('node-horseman');
// https://www.npmjs.com/package/node-horseman
const UA = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0';
const URL = "http://example.com";
const URL2 = "https://account.technitraderonlinecampus.com/sign-in/";

var options = {
    // phantomPath: '/Users/ivos/tools/phantom'
}

var horseman = new Horseman(options);
/* 
horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('http://www.google.com')
  .type('input[name="q"]', 'github')
  .click('[name="btnK"]')
  .keyboardEvent('keypress', 16777221)
  .waitForSelector('div.g')
  .count('div.g')
  .log() // prints out the number of results
  .close();
  */
 console.log(`browse to ${URL2}`);
 const h = horseman.open(URL2)
   .waitForSelector('p')
   .count('p')
   .log()
   // .close();

 h.cookies()
   .log()
 

   /*
   [ { domain: '.technitraderonlinecampus.com',
    expires: 'Tue, 31 Oct 2017 12:55:17 GMT',
    expiry: 1509454517,
    httponly: false,
    name: 'PHPSESSID',
    path: '/',
    secure: false,
    value: '3ogimoa4715l9bo8e9v8sinjt1' },
  { domain: '.technitraderonlinecampus.com',
    expires: 'Wed, 01 Nov 2017 11:55:17 GMT',
    expiry: 1509537317,
    httponly: false,
    name: 'tracker-test',
    path: '/',
    secure: false,
    value: 'true' },
  { domain: '.technitraderonlinecampus.com',
    expires: 'Wed, 01 Nov 2017 04:00:00 GMT',
    expiry: 1509508800,
    httponly: false,
    name: 'return-to',
    path: '/',
    secure: false,
    value: '%2F' },
  { domain: '.technitraderonlinecampus.com',
    expires: 'Wed, 01 Nov 2017 04:00:00 GMT',
    expiry: 1509508800,
    httponly: false,
    name: 'linked-from',
    path: '/',
    secure: false,
    value: '%2F' } ]
    */

   
/*
   horseman
  .open('http://httpbin.org/cookies')
  .cookies()
  .log()
  .close();

  const users = ['PhantomJS', 'nodejs'];
  
  users.forEach((user) => {
      const horseman = new Horseman();
      horseman
          .open(`http://twitter.com/${user}`)
          .text('.ProfileNav-item--followers .ProfileNav-value')
          .then((text) => {
              console.log(`${user}: ${text}`);
          })
          .close();
  });
 */
