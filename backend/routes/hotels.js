const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/:id', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
        const hotel = db.hotels.find(h => h.id === parseInt(req.params.id));

        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.json(hotel);
    } catch (error) {
        res.status(500).json({ message: 'Error reading the database' });
    }
});

module.exports = router;