const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected.");
})

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random = Math.floor(Math.random() * cities.length);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: '6638f28c6b4762890edf4854', // Eli ID
            location: `${cities[random].city}, ${cities[random].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: "https://source.unsplash.com/collection/483251", // Random for now
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro corrupti esse, nihil cum blanditiis veniam eos, animi similique beatae, laudantium voluptatum nisi cumque cupiditate repellendus asperiores molestias accusantium magnam explicabo?",
            price,
        })
        await camp.save();
    }
    console.log("Done seeding.");
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log("DB connection closed.");
})