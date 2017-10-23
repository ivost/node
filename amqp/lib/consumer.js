const amqp = require('amqp-connection-manager');

const config = require('./config');

// Create a new connection manager 
const connection = amqp.connect(['amqp://localhost'], { json: true });
// Ask the connection manager for a channel
// Specify a setup function to run every time we reconnect to the broker. 
const chan = connection.createChannel({
    setup: function (channel) {
        // `channel` here is a regular amqplib `ConfirmChannel`. 
        // console.log(`Create channel to ${queue}`);
        //return channel.assertQueue(queue, { durable: true });
        return Promise.all([
            channel.assertQueue(config.QueueName, {durable: true}),
            channel.prefetch(1),
            channel.consume(config.QueueName, onMessage)
        ]);
    }
});

// Handle an incomming message.
const onMessage = (data) => {
    const msg = data.content.toString();
    //console.log("receiver: got ", msg);
    const message = JSON.parse(msg);
    chan.ack(data);
    console.log("receiver: got message", message);
}

chan.waitForConnect()
.then(() => {
    console.log("Listening for messages");//
    // 100K sent in 0.35 sec - 300K/sec
});

