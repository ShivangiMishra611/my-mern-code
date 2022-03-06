const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  title: String,
  description: String,
  file: String,
  thumbnail:String,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("videos", mySchema);

module.exports = myModel;