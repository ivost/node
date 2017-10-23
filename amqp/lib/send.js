'use strict';

const amqp = require('amqplib');
const Config = require('./config');
const Util = require('./util');
const moment = require('moment')
const NUM_MSGS = 3;

const util = new Util();

amqp.connect(Config.brokerUrl).then((conn) => {
  conn.createConfirmChannel().then((ch) => {
    var time = moment();
    console.log("time " + time);
    let sec = Math.ceil(time/1000);
    console.log("sec  " + sec);
    for (var i = 0; i < NUM_MSGS; i++) {
      //const msg = `Hello World ${i}`;
      const msg = util.genMessage(i, sec);
      sec = sec + 10;
      ch.sendToQueue(Config.queueName, Buffer.from(msg));
    }
    ch.waitForConfirms().then(() => {
      console.log(`${NUM_MSGS} messages sent.`);
      conn.close();
    }).catch(console.error);
  });
});

// https://www.unixtimestamp.com/
// 1505781987