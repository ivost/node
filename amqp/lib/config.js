class Config {
  static get brokerUrl() {
    return 'amqp://localhost';
  }
  static get queueName() {
    return 'q2';
  }
  static get queueOptions() {
    return {
      durable: false
    };
  }
  static get consumeOptions() {
    return {
      noAck: true
    };
  }
}

module.exports = Config;
