/*
https://github.com/cheeriojs/cheerio#-selector-context-root-
https://github.com/gahabeen/jsonframe-cheerio
*/
const request = require('request');
const cheerio = require('cheerio');
const jsonframe = require('jsonframe-cheerio');
const url = `http://money.cnn.com/data/premarket/`;

const contents = `<!DOCTYPE html>
<html lang="en">
<head>
</head>

<body>
<h2>Pricing</h2>
<img class="picture" src="somepath/to/image.png">
<a class="mainLink" href="some/url/to/somewhere">A Link</a>
<span class="date"> We are the 04/02/2017</span>
<div class="popup"><span>Some inner content</span></div>
<ul id="pricing" class="menu">
    <li class="item">
        <span class="planName">Hacker</span>
        <span class="planPrice" price="0">Free</span>
        <a href="/hacker"> <img src="./img/hacker.png"> </a>
    </div>
    <li class="item">
        <span class="planName">Pro</span>
        <span class="planPrice" price="39.00">$39</span>
        <a href="/pro"> <img src="./img/pro.png"> </a>
    </div>
</ul>
<div id="contact">
<span itemprop="usaphone">Phone USA: (912) 148-456</div>
<span itemprop="frphone">Phone FR: +332 38 30 37 90</div>
<span itemprop="email">Email: lspurcell@suddenlink.net</div>
</div>
</body>

</html>
`;

function parse(html) {
  const $ = cheerio.load(html);
  // console.log($.xml());

  var list = [];
  jsonframe($); // initializes the plugin

  let frame1 = {
    "title": "h2",                   // CSS selector
  };

  let frame2 = {
    "pricing": {
      _s: "#pricing .item",   // selector
      _d: [{                  // result data
        "name": ".planName",
        "price": ".planPrice"
      }]
    }	
  };

  /*
let frame2 = {
  "names": ["#pricing .item .planName"]
};
*/

  let frame3 = {
    "email": "[itemprop=email] < phone",
    "frphone": "[itemprop=frphone] < phone"
  };

  // let result = $('body').scrape(frame, { string: true })
  // console.log( result );

  let result = $('body').scrape(frame2);
  console.log( result );

}

parse(contents);

/*
request(url, (err, resp, html) => {
  if (!err) {

    const $ = cheerio.load(html, {
      normalizeWhitespace: true,
      xmlMode: true
    });

    const b = $('.wsod_futureQuote');
    // console.log(b);    
    jsonframe($) // initializing the plugin

  let frame = {
    "fut": "#wsod_futures" // this is an inline selector
    //"email": "span[itemprop=email] < email" // output an extracted email
  }

  //const res = $('body').scrape(frame, { string: true } );
  //const res = $('body').scrape(frame, {json: true});
  const res = $('body').scrape(frame);
  console.log(res);

    //console.log(html);
    //const b = $('#premarket_marketTables');
    //const b = $('.h4');
    //const c = b.children();
    //console.log(c);
    //b.each((i, el) => {
      //var a = $(this).prev();
      //console.log(a.text());
      //console.log(i, el.childNodes.length);
      // for (x of el.childNodes) {
      //   console.log(x);
      // }
    //});
*/

/*
    $('cnnBody').each(function(i, element){
      var a = $(this).prev();
      console.log(a.text());
    });
  }
  */
//}
//});
