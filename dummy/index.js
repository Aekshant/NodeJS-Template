const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient();
const producer = new Producer(client);

const payloads = [
  { topic: 'test', messages: 'Hello, Kafka!' }
];

producer.send(payloads, (error, data) => {
  if (error) {
    console.error('Error publishing message:', error);
  } else {
    console.log('Message published successfully:', data);
  }
});