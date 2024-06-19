const mongoose = require('mongoose');
require("dotenv").config();

const connectionUrl = process.env.MongoURL
// Connect to MongoDB
mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Access the MongoDB native driver's database object
const mongoDB = mongoose.connection.db;

module.exports = mongoDB;