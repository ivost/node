
const cheerio = require('cheerio');
const _ = require('lodash')
const jsonframe = require('jsonframe-cheerio');

const Horseman = require('node-horseman')
const co = require('co');

const URL = 'https://technitrader.com/tc2000-users-blog/'
const URL1 = 'https://augmentedtrader.com/page/2/'
const SEL1 = '.category-uncategorized, #post-wrapper a, .hl'

// let html = `
// <html> <body>
//     <a href="https://foo">Testing</a>    
//     <h3 class="hl">Archives</h3>         
//     <div id="cnt">
//       <ul>
//         <li><a href="https://augmentedtrader.com/2014/01/">January 2014</a></li>
//         <li><a href="https://augmentedtrader.com/2013/12/">December 2013</a></li>
//       </ul>
//     </div>
//  </body> </html>`;
// parse(html);

////////////////////
var horseman = new Horseman();
co(function* () {
  yield horseman.open(URL1);
  var html = yield horseman.html();
  parse(html);
  yield horseman.close();
}).catch(function (e) {
  console.log(e)
});
////////////////////

function parse(html) {
  // console.log(html);
  const $ = cheerio.load(html);
  jsonframe($);

  let frame = {
    head: "h3.hl",
    link: "a@href",
    posts: ["ul a@href"],
    footer: "div.fl a@href"
  }

  const x = $('body').scrape(frame, { string: true });
  console.log(x);
}