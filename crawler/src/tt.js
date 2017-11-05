let cheerio = require('cheerio');
let _ = require('lodash')
const jsonframe = require('jsonframe-cheerio');
const mkdirp = require('mkdirp');

//let jsonframe = require('./index.js')
// https://www.gitbook.com/book/kevinchisholm/basic-web-scraping-with-node-js-and-cheerio-js/details
let html = `
<html>
<body>
	<h2 class="sectionedit24">
		<a name="january-2016" id="january-2016">January 2016</a>
	</h2>
	<div class="level2">
		<ul>
		<li class="level1"><div class="li"> <a href="/services:dme:2016-01-29" class="wikilink1" title="services:dme:2016-01-29">2016-01-29</a></div>
		</li>
		<li class="level1"><div class="li"> <a href="/services:dme:2016-01-28" class="wikilink1" title="services:dme:2016-01-28">2016-01-28</a></div>
		</li>
		</ul>
	</div>

	<h2 class="sectionedit24">
		<a name="january-2017" id="january-2017">January 2017</a>
	</h2>
	<div class="level2">
		<ul>
			<li class="level1"><div class="li"> <a href="/services:dme:2017-01-02" class="wikilink1" title="services:dme:2017-01-02">2017-01-02</a></div>
			</li>
		</ul>
	</div>
	
	</body>
</html>
`
let $ = cheerio.load(html)
jsonframe($)
let frame1 = {
	tt: {
		_s: "h2.sectionedit24",
		_d: [{
			month: "a",
		}]
	}
}
let frame2 = {
	tt: {
		_s: "a.wikilink1",
		_d: {
			link: "@href",
		}
	}
}

// let res1 = $('body').scrape(frame1)
// console.log(res1)

// let res2 = $('body').scrape(frame2)
// console.log(res2)

let sel = 'h2.sectionedit24'; // 
sel = 'div.level2';
let res2 = $(sel);
console.log(res2.length + ' children of ' + sel);

res2.each(function(i, el) {
	// let x = $(this).html()
	let x = $(this).find('a.wikilink1');
	console.log(x.length + ' children of a.wikilink1');
	// console.log(x);
	x.each(function(i, el) {
		const text = $(this).text();
		const href = el.attribs.href; 
		console.log(`text ${text}, href ${href}`);
		ensureDir(text);
	});
})

function ensureDir(date) {
	const t = date.split('-');
	const yr = t[0];
	const mon = t[1];
	const day = t[2];
	console.log('ensureDir', yr, mon, day);	
	const path = `./out/${yr}/${mon}`;
	console.log(path);
	mkdirp(path, function(err) { 
		// console.log(err);
	});
}

	//console.log(x);
	//console.log(el);

// for (var i=0; i<res2.length; i++) {
// 	console.log(res2[i])
// }

// console.log(JSON.stringify(res2))

// res2.forEach(function(element) {
// 	console.log(JSON.stringify(element))
// }, this);

// for (var i=0; i<res1.tt.length; i++) {
// 	console.log(res1.tt[i])
// 	// console.log(res2.tt[i])	
// }


