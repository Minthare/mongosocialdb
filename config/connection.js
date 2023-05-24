const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://root:root@cluster1.twg6de4.mongodb.net/socialmediadata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

 
module.exports = mongoose.connection;
