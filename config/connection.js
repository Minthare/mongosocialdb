const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb+srv://root:root@cluster1.twg6de4.mongodb.net/socialmediadata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Export connection 
module.exports = mongoose.connection;
