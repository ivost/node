'use strict';

const amqp = require('amqplib');
const Config = require('./config');

amqp.connect(Config.brokerName).then(function (conn) {
  process.once('SIGINT', () => {
    console.log('EXIT');
    conn.close();
  });

  conn.createConfirmChannel().then((channel) => {
    let promise = channel.assertQueue(Config.queueName, Config.queueOptions);
    promise = promise.then((queueOK) => {
      return channel.consume(Config.queueName, (msg) => {
        console.log("Received '%s'", msg.content.toString());
      }, Config.consumeOptions);
    });

    return promise.then((consumeOk) => {
      console.log('Waiting for messages. To exit press CTRL+C');
    });
  });
}).catch(console.warn);
