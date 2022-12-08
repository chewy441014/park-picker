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
        }, 
    },   
);

function formatDate(createdAt) {
    return createdAt.toDateString();
}

const Trip = model('trip', searchSchema);

const handleError = (err) => console.error(err);

module.exports = { Trip };