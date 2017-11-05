
const cheerio = require('cheerio');
const _ = require('lodash')
const jsonframe = require('jsonframe-cheerio');

const Horseman = require('node-horseman')
const co = require('co');

const URL = 'https://technitrader.com/tc2000-users-blog/'
const URL1 = 'https://augmentedtrader.com/page/2/'
const SEL1 = '.category-uncategorized, #post-wrapper a, .hl'

let html = `
<html>
<head></head>
<body>
    <h2>Pricing</h2>
    <img class="picture" src="somepath/to/image.png">
    <h3 class="hl">Archives</h3>         <ul>
    <li><a href="https://augmentedtrader.com/2014/01/">January 2014</a></li>
    <li><a href="https://augmentedtrader.com/2013/12/">December 2013</a></li>
    <li><a href="https://augmentedtrader.com/2013/11/">November 2013</a></li>
    </ul>
    <div id="contact">
    <span itemprop="usaphone">Phone USA: (912) 148-456</div>
    <span itemprop="frphone">Phone FR: +332 38 30 37 90</div>
    <span itemprop="email">Email: lspurcell@suddenlink.net</div>
  </div>
</body>
</html>
`;

parse(html);

////////////////////
/*
var horseman = new Horseman();
co(function* () {
  yield horseman.open(URL1);
  var html = yield horseman.html();
  //  .html('#top-posts-2 .bump-view')
  console.log(html);
  parse(html);
  yield horseman.close();
}).catch(function (e) {
  console.log(e)
});
*/
////////////////////

function parse(html) {

  console.log(html);
  const $ = cheerio.load(html);
  jsonframe($);

  let frame = {
    "link": {
      _s: "li a",
      _a: "href"
    }
  }

//   let frame = {
//     //"title": "h2"
//     "proPrice": {
//       _s: ".planName:contains('Pro') + span",
//       _a: "price"
//     }
//   }

  const x = $('body').scrape(frame);
  console.log(x);
}

/*
  let frame = { 
    toc: {
      _s: ".post",
      _d: [{
        text: "a"
        //"link": "a @href"
      }]
    }	
  }
  */
// Or a shorter way which works for simple string arrays
// let frame = { 
// 	"pricingNames": ["#pricing .item .planName"]
// }

// let result = $('body').scrape(frame, { string: true })
// console.log( result )

/* output =>
	{ 
		"pricingNames": ["Hacker", "Pro"]	
	}
*/
