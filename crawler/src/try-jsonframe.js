let cheerio = require('cheerio');
let _ = require('lodash')
const jsonframe = require('jsonframe-cheerio');
//let jsonframe = require('./index.js')

let html = `
<html>
<head></head>
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
            <a href="http://apple.com"> <img src="./img/hacker.png"> </a>
        </div>
        <li class="item">
            <span class="planName">Pro</span>
            <span class="planPrice" price="39.00">$39</span>
            <a href="http://google.com"> <img src="./img/pro.png"> </a>
        </div>
    </ul>
	<div id="contact">
		<span itemprop="usaphone">Phone USA: (912) 148-456</div>
		<span itemprop="frphone">Phone FR: +332 38 30 37 90</div>
		<span itemprop="email">Email: lspurcell@suddenlink.net</div>
	</div>
</body>
</html>
`
let $ = cheerio.load(html)

jsonframe($)
let frame0 = {
	"proPrice": {
		_s: ".planName:contains('Pro') + span",
		_a: "price"
	}
}
let frame = {
	"pricing": {
		_s: "#pricing .item",
		_d: [{
			"name": ".planName",
			"price": ".planPrice @ price",
			"link": "a @ href"
		}]
	}
}

let output = $('body').scrape(frame)
console.log(output)

