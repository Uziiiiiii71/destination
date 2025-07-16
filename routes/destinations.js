const express = require('express');
const router = express.Router();
const controller = require('../controllers/destinationController');

router.get('/', controller.getDestinations);
router.post('/', controller.createDestination);

module.exports = router;
