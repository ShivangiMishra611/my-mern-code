const mongoose = require("../connection");

const mySchema = new mongoose.Schema({

  user: {type : mongoose.Types.ObjectId, ref:'users'},
  text : String,  
  name: String,
  suggestion: String,
  compliment: String,
  
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("feedback", mySchema);

module.exports = myModel;