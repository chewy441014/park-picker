const db = require('../config/connection');
const { User, Trip } = require('../models');

const usersData = [
    {
        "firstName": "David",
        "lastName": "Codner",
        "username": "David",
        "email": "david@email.com",
        "password": "password123"

    },
    {
        "firstName": "Michael",
        "lastName": "Gostomski",
        "username": "Michael",
        "email": "Michael@email.com",
        "password": "password123"
    },
    {
        "firstName": "Penny",
        "lastName": "Leung",
        "username": "Penny",
        "email": "Penny@email.com",
        "password": "password123"
    },
    {
        "firstName": "Preston",
        "lastName": "Hill",
        "username": "Preston",
        "email": "Preston@email.com",
        "password": "password123"
    },
    {
        "firstName": "Chiemeka",
        "lastName": "Anunkor",
        "username": "Chiemeka",
        "email": "Chiemeka@email.com",
        "password": "password123"
    },
]

const tripData = [
    {
        "searchQuery": "Camping",
        "location": "Austin, TX",
        "username": "David"
    },
    {
        "searchQuery": "Hiking",
        "location": "Austin, TX",
        "username": "Preston"
    },
    {
        "searchQuery": "Swimming",
        "location": "Austin, TX",
        "username": "Penny"
    },
]

db.once('open', async () => {
    console.log("===================================");
    console.log("Initializing Connection");

    await User.deleteMany({});
    await Trip.deleteMany({});
    console.log("Database cleared");

    console.log("===================================");
    console.log("Seeding Users");
    const users = await User.insertMany(usersData);
    console.log("Users successfully seeded");
    console.log("===================================")

    console.log("===================================");
    console.log("Seeding Trips");
    const trips = await Trip.insertMany(tripData);
    console.log("Trips successfully seeded");
    console.log("===================================")

    console.log("   ");
    console.log("Database Seeded, Happy Hacking!");
    process.exit(0);
});