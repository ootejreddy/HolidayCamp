const mongoose = require("mongoose");
const Campground = require("../models/campGround");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelper");
mongoose
  .connect(`mongodb://localhost:27017/yelp-camp`)
  .then(() => {
    console.log("connected to the database");
  })
  .catch((e) => {
    console.log(`connection failed`);
    console.log(e);
  });

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20 + 10);
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/483251/1600x900",
      description: "Great Place for a holiday",
      price: price,
    });
    // console.log(`${sample(descriptors)}`);
    await camp.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
