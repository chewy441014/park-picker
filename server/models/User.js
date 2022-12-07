const mongoose = require('mongoose');


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

    
    toJSON: {
        virtuals: true,
    },
    id: false,
    }
);

    const User = model('user', userSchema);

    const handleError = (err) => console.error(err);

User.create(
    {
    userName: 'Penny',
    email: 'penguin812@gmail.com'
    },
    (err) => (err ? handleError(err) : console.log('Created new user'))
);

module.exports = User;
