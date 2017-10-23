// https://www.npmjs.com/package/kraken-exchange
Kraken = require('kraken-exchange');

const kraken = new Kraken(API_KEY, PRIV_KEY);

kraken.time()
    .then(response => console.log(response))
    .catch(err => console.error(err));


