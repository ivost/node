let cheerio = require('cheerio');
let _ = require('lodash')
const jsonframe = require('jsonframe-cheerio');
//let jsonframe = require('./index.js')

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
			<li class="level1"><div class="li"> <a href="/services:dme:2017-01-01" class="wikilink1" title="services:dme:2016-01-29">2016-01-29</a></div>
			</li>
			<li class="level1"><div class="li"> <a href="/services:dme:2017-01-02" class="wikilink1" title="services:dme:2016-01-28">2016-01-28</a></div>
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
		_s: "div.level2 ul",
		_d: [{
			aa: {
				_s: "div.li",
				_d: [{
					day: "a@href",
				}]
			}
		}]
	}
}

let res1 = $('body').scrape(frame1)
// console.log(res1)

let res2 = $('body').scrape(frame2)
// console.log(JSON.stringify(res2))

for (var i=0; i<res1.tt.length; i++) {
	console.log(res1.tt[i])
	// console.log(res2.tt[i])	
}


