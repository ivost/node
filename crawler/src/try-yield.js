const Horseman = require('node-horseman')
const co = require('co');

const cheerio = require('cheerio');
const jsonframe = require('jsonframe-cheerio');

const URL = 'https://technitrader.com/tc2000-users-blog/'

const URL1 = 'https://augmentedtrader.com/page/2/'

const SEL1 = '.category-uncategorized, #post-wrapper a, .hl'
''
var horseman = new Horseman();

co(function* () {
  yield horseman.open(URL1);
  var html = yield horseman.html();

  //  .html('#top-posts-2 .bump-view')
  //console.log(html);
  parse(html);

  /*  
    var title = yield horseman.title();
    var numLinks = yield horseman.count('a');
    console.log('Title: ' + title); //Google 
    console.log('Num Links: ' + numLinks); //35 
    */
  yield horseman.close();
}).catch(function (e) {
  console.log(e)
});

function parse(html) {
  console.log(html);
  const $ = cheerio.load(html, {
    normalizeWhitespace: true,
    xmlMode: true
  });

  jsonframe($);

  // const ch = $('#container h2').children();
  // console.log(ch);
  // ch.each((i, el) => {
  //   console.log(i);
  //   console.log(el);
    
    // var a = $(this).prev();
    // console.log(a.text());
    // console.log(i, el.childNodes.length);
    // for (x of el.childNodes) {
    //   console.log(x);
    // }
//  });

  let frame = {
    el: "#container h2" 
  }
  const x = $('body').scrape(frame);
  console.log(x);


}


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
