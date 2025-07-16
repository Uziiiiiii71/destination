
const Destination = require('../models/destinations');


// GET all destinations
exports.getDestinations = async (req, res) => {
    try {
        const data = await Destination.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST new destination
exports.createDestination = async (req, res) => {
    try {
        const newDest = new Destination(req.body);
        const saved = await newDest.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
