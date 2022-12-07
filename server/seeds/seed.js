const db = require('../config/connection');
const { User } = require('../models');

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

db.once('open', async () => {
    console.log("===================================");
    console.log("Initializing Connection");

    await User.deleteMany({});
    console.log("Database cleared");

    console.log("===================================");
    console.log("Seeding Users");
    const users = await User.insertMany(usersData);
    console.log("Users successfully seeded");
    console.log("===================================")

    console.log("   ");
    console.log("Database Seeded, Happy Hacking!");
    process.exit(0);
});