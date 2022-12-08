const mongoose = require('mongoose');
const model = mongoose.model;

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
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
        recentSearches: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'trip'
            }
        ],   
    },
    {
        toJSON: {
            virtuals: true,
            getter: true,
        },
        id: false,
    }
);

userSchema.virtual('savedSearchCount',)
    .get(function () {
        if (this.recentSearches) {
            return this.recentSearches.length;
        }
    });

userSchema
    .virtual('fullName')
    .get(function () {
      return `${this.firstName} ${this.lastName}`;
    })
    .set(function (v) {
      const firstName = v.split(' ')[0];
      const lastName = v.split(' ')[1];
      this.set({ firstName, lastName });
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

module.exports = { User };
