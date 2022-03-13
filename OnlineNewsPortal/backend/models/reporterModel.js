const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  
  username: String,
  password: String,
  dateOfBirth: Number,
  designation : String,
  FacebookLink: String,
  TwitterLink: String,
  Country: String,
  Landmark:String,
  Language:String,
  City:String,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("reporters", mySchema);

module.exports = myModel;