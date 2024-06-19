const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient();
const consumer = new Consumer(
  client,
  [{ topic: 'test', partition: 0 }],
  { autoCommit: false }
);

consumer.on('message', (message) => {
  console.log('Received message:', message);
  // Process the message here
});

consumer.on('error', (error) => {
  console.error('Error consuming message:', error);
});