const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  name :String,
  email : String,
  password: String,
  contact: Number ,
  gender: String,
  age: Number,
  thumbnail: String,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("reporter", mySchema);

module.exports = myModel;