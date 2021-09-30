const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const campGroundSchema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
});
const Campground = mongoose.model("Campground", campGroundSchema);
module.exports = Campground;
