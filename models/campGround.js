const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const campGroundSchema = new Schema({
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
});
const Campground = mongoose.model("Campground", campGroundSchema);
module.exports = Campground;
