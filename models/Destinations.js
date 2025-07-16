// models/Destination.js

const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: String,
    price: Number
});

module.exports = mongoose.model('Destination', DestinationSchema);
