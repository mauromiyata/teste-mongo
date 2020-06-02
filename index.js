require('dotenv').config();
const Mongoose = require('mongoose');

var db = Mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
}, function(error){
    if(error) console.log(error);

        console.log("connection successful");
});