const mongoose = require("mongoose");

 const musicSchema = mongoose.Schema({
  title: String,
  image: String,
  content: String,
  description: String,
  category: String,
  url:String
});
module.exports = mongoose.model("Music", musicSchema);