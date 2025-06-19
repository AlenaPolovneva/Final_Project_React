const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

router.post('/:id', authenticate, (req, res) => {
    const hotelId = parseInt(req.params.id, 10);

    if (isNaN(hotelId)) {
        return res.status(400).json({ message: 'Invalid hotel ID' });
    }

    if (!Array.isArray(req.user.bookedHotels)) {
        req.user.bookedHotels = [];
    }

    if (!req.user.bookedHotels.includes(hotelId)) {
        req.user.bookedHotels.push(hotelId);
        return res.json({ message: 'You have successfully booked this hotel!' });
    } else {
        return res.status(200).json({ message: 'You have already booked this hotel.' });
    }
});

module.exports = router;