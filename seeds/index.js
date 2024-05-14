const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const options = {
    resource_type: "image",
    max_results: 500,
};

const seedSize = 300;

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected.");
})

const sample = arr => arr[Math.floor(Math.random() * arr.length)];


const seedDB = async () => {
    await Campground.deleteMany({});

    const images = [];
    await cloudinary.api.resources(options).then((res) => {
        res.resources.forEach((asset) => {
            if (asset.folder === "YelpCamp")
                images.push({ url: asset.secure_url, filename: asset.public_id });
        });
    });

    for (let i = 0; i < seedSize; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const numberOfImages = Math.floor(Math.random() * 4) + 1;
        const campgroundImages = [];
        for (let i = 0; i <= numberOfImages; i++) {
            const img = images[Math.floor(Math.random() * images.length) % images.length];
            if (campgroundImages.find((im) => im.url === img.url) !== undefined) i--;
            else campgroundImages.push(img);
        }
        const price = Math.floor(Math.random() * 20) + 10;
        const randomCity = cities[random1000];
        const camp = new Campground({
            location: `${randomCity.city}, ${randomCity.state}`,
            // location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: campgroundImages,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor, sed sit maiores, laudantium consequatur quia enim omnis amet totam quibusdam aspernatur optio. Quaerat asperiores vero minus, debitis maxime ea!",
            price: price,
            author: "6638f28c6b4762890edf4854",
        });
        await camp.save();
    }
    console.log("Done seeding.");
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("DB connection closed.");
})