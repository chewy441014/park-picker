const mongoose = require('mongoose');
const model = mongoose.model;

const searchSchema = new mongoose.Schema(
    {
        searchId: {
            type: mongoose.Types.ObjectId,
            default: new mongoose.Types.ObjectId()
        },
        searchQuery: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        location: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: new Date,
            get: formatDate
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        },
        password: {
            type: String,
            required: true,
            minLength: 10,
            maxLength: 64
        },
        createdAt: {
            type: Date,
            default: new Date,
            get: formatDate
        },
        recentSearches: [searchSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('savedSearchCount')
    .get(function () {
        if (this.recentSearches) {
            return this.recentSearches.length;
        }
    });



const User = model('user', userSchema);

const handleError = (err) => console.error(err);

function formatDate(createdAt) {
    return createdAt.toDateString();
}

// User.create(
//     {
//         username: 'Penny',
//         email: 'penguin812@gmail.com',
//         password: 'password123'
//     },
//     (err) => (err ? handleError(err) : console.log('Created new user'))
// );

module.exports = User;
