const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  name :String,
  username: String,
  password: String,
  age: Number,
  thumbnail: String,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("reporter", mySchema);

module.exports = myModel;