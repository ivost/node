var Horseman = require('node-horseman');
// https://www.npmjs.com/package/node-horseman

var options = {
    phantomPath: '/Users/ivos/github/node/crawler/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs'
}

//phantomPath: './node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs'
// Phantomjs binary available at /Users/ivos/github/node/crawler/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs
var horseman = new Horseman(options);
 
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
