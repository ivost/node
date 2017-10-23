'use strict';

const amqp = require('amqp-connection-manager');
const Config = require('./config');

class Util {

  //   connect = new Promise(function(resolve, reject) {
//     return resolve();
// }

  // connect() {
  //   return new Promise(amqp.connect(Config.brokerUrl));
  // }

  genMessage(idx, seconds) {
    // signal,sid=Sprint,id=A0123456789012,nt=4G ss=121,lat=33.4512,lng=86.9967 1505782392859919733
    // 1505782392859919733
    // 1505782353000000000
    const id = 'A0123456789012';
    const system = 'Sprint';
    const type = '4G';
    const level = 11 + idx;
    const lat = 33.4512;
    const lng = 86.9967;
    const msg = `signal,sid=${system},id=${id},nt=4G ss=${level},lat${lat},lng=${lng} ${seconds}000000000`;
    console.log(msg);
    return msg;
  }
}

module.exports = Util;
