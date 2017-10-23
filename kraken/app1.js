const KrakenClient = require('kraken-api');

//const kraken       = new KrakenClient(key, secret);
const kraken       = new KrakenClient('', '');

const PAIR =  'XETHZUSD' ;

const LOW = 293;
const HIGH = 292;

// https://www.kraken.com/help/api
// https://api.kraken.com/0/public/AssetPairs

const pf2 = (f) => parseFloat(f).toFixed(2)
const print1 = (m, a) => `${m} - today: ${a[0]}, 24hr: ${a[1]}`;
const print1f = (m, a) => `${m} - today: ${pf2(a[0])}, 24hr: ${pf2(a[1])}`;
const print2 = (m, d, a) => `${m} ${a[1]} ${d} ${pf2(a[0])}`;

const below = (price, lim, res) => { if (price < lim) send(`${price} is BELOW ${lim}`, res); }
const above = (price, lim, res) => { if (price > lim) send(`${price} is ABOVE ${lim}`, res); }

const send = (m, res) => { 
    console.log('==============='); 
    console.log(m); 
    // console.log(res); 
    console.log(print2 ('ask   ', 'x', res.a));
    console.log(print2 ('bid   ', 'x', res.b));
    console.log(print2 ('last  ', '@', res.c));
    console.log(print1f('low   ', res.l));
    console.log(print1f('high  ', res.h));
    console.log(print1 ('trades', res.t));
}

(async () => {
    console.log('Checking ', PAIR);
	// Display user's balance
	//console.log(await kraken.api('Balance'));

    // Get Ticker Info
    /*
    <pair_name> = pair name
    a = ask array(<price>, <whole lot volume>, <lot volume>),
    b = bid array(<price>, <whole lot volume>, <lot volume>),
    c = last trade closed array(<price>, <lot volume>),
    v = volume array(<today>, <last 24 hours>),
    p = volume weighted average price array(<today>, <last 24 hours>),
    t = number of trades array(<today>, <last 24 hours>),
    l = low array(<today>, <last 24 hours>),
    h = high array(<today>, <last 24 hours>),
    o = today's opening price
    { XETHZUSD:
   { a: [ '293.04000', '41', '41.000' ],
     b: [ '293.01000', '2', '2.000' ],
     c: [ '293.06000', '1.00000000' ],
     v: [ '43.72357162', '15709.59279040' ],
     p: [ '294.07663', '297.78888' ],
     t: [ 14, 4698 ],
     l: [ '293.06000', '292.00000' ],
     h: [ '294.80000', '307.00000' ],
     o: '294.80000' } }
    */
    try {
        const resp = await kraken.api('Ticker', { pair : PAIR })
        //console.log(resp.result);
        const res = resp.result[PAIR];
        if (!res) {
            console.log(resp.error);
            return;    
        }
        const price = res.c[0];

        below(price, LOW, res);
        above(price, HIGH, res);
        
    } catch (ex) {
        console.log(ex);
    }
})();