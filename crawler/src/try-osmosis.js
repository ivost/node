/*
https://github.com/cheeriojs/cheerio#-selector-context-root-
https://github.com/gahabeen/jsonframe-cheerio
https://github.com/rchipka/node-osmosis
https://github.com/rchipka/node-osmosis/wiki

http://blog.system-mining.xyz/web-scraper-for-nodejs-node-osmosis/

osmosis  
.get('https://www.facebook.com/login')
.submit("#login_form", 
{
   'email': '--------@gmail.com',
   'pass':'**********'
})
.then(function(context, data) {
    osmosis.config('cookies', context.cookies)
    osmosis.headers(context.request.headers)
})
*/

const osmosis = require('osmosis');
const request = require('request');
const cheerio = require('cheerio');
const jsonframe = require('jsonframe-cheerio');
const url = `http://money.cnn.com/data/premarket/`;
const sign_in = `https://account.technitraderonlinecampus.com/sign-in/`;
const user_agent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/60.0`
var options = {
  url: sign_in,
  headers: {
    'User-Agent': user_agent
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(response.headers['set-cookie']);
    // console.log(body);
  }
}

request(options, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  } 
  if (response.statusCode !== 200) {
    console.error(response.statusCode);
    return;
  }
  console.log(response.headers['set-cookie']);
  console.log(body);
  
});

// osmosis
// .get(signin)

// .find('#signin')
// .then((ctx) => { 
//   console.log(ctx); 
// })
// .set({
//     'foo': '#signin'
// })
//.set('location')
//.follow('@href')
// .find('header + div + div li > a')
// .set('category')
// .follow('@href')
// .paginate('.totallink + a.button.next:first')
// .find('p > a')
// .follow('@href')
// .set({
//     'title':        'title',
//     'images':       ['img@src']
// })
// get data of all value in set

// .data(function(data) {
//   console.log('===========')
//   console.log(data)
//   console.log('===========')
// })
// .log(console.log)
// .error(console.log)
// .debug(console.log)

/*

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

let frame2 = {
  "names": ["#pricing .item .planName"]
};

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
*/

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
