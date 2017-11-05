
const cheerio = require('cheerio');
const jsonframe = require('jsonframe-cheerio');
// let _ = require('lodash')

const Horseman = require('node-horseman')
const co = require('co');

const URL = 'https://technitrader.com/tc2000-users-blog/'

const URL1 = 'https://augmentedtrader.com/page/2/'

const SEL1 = '.category-uncategorized, #post-wrapper a, .hl'

// let html = `
// <html>
// <head></head>
// <body>
//     <h2>Pricing</h2>
//     <img class="picture" src="somepath/to/image.png">
//     <a class="mainLink" href="some/url/to/somewhere">A Link</a>
//     <span class="date"> We are the 04/02/2017</span>
//     <div class="popup"><span>Some inner content</span></div>
//     <ul id="pricing" class="menu">
//         <li class="item">
//             <span class="planName">Hacker</span>
//             <span class="planPrice" price="0">Free</span>
//             <a href="/hacker"> <img src="./img/hacker.png"> </a>
//         </div>
//         <li class="item">
//             <span class="planName">Pro</span>
//             <span class="planPrice" price="39.00">$39</span>
//             <a href="/pro"> <img src="./img/pro.png"> </a>
//         </div>
//     </ul>
//   <div id="contact">
//     <span itemprop="usaphone">Phone USA: (912) 148-456</div>
//     <span itemprop="frphone">Phone FR: +332 38 30 37 90</div>
//     <span itemprop="email">Email: lspurcell@suddenlink.net</div>
//   </div>
// </body>
// </html>
// `;

// parse(html);

var horseman = new Horseman();
co(function* () {
  yield horseman.open(URL1);
  var html = yield horseman.html();

  //  .html('#top-posts-2 .bump-view')
  //console.log(html);
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
    "link": {
      _s: ".mainLink",
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
