const amqp = require('amqp-connection-manager');

const config = require('./config');
const Util = require('./util');


//const QUEUE_NAME = config.QueueName;
const MAX_COUNT = 10;

// // Create a new connection manager 
// const connection = amqp.connect(['amqp://localhost'], { json: true });
// // Ask the connection manager for a ChannelWrapper.  
// // Specify a setup function to run every time we reconnect to the broker. 
// const chan = connection.createChannel({
//     setup: (channel) => {
//         return Promise.all([
//             channel.assertQueue(QUEUE_NAME, {durable: true}),
//         ]);
//     }
// });

//const chan = util.Channel;

let util = new Util();
util.channel().waitForConnect()

.then(() => {
    console.log('CONNECTED');
    for (i = 0; i < MAX_COUNT; i++) {
        const message = JSON.stringify({ hello: "World " + i });
        util.send(message);
    }
});


