const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  age: Number,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("userlogin", mySchema);

module.exports = myModel;