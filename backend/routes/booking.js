const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Tickets');
const { body, validationResult } = require('express-validator');

// Route 1: Get all notes using GET "/api/booking/getnotes". Login required
router.get('/getnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// Route 2: Add notes using POST "/api/booking/addnotes". Login required
router.post('/addnotes', fetchuser, [
    body('destination', 'Destination is required').isLength({ min: 3 }),
    body('hotelType', 'Hotel type is required').isLength({ min: 3 }),
    body('transportationMode', 'Transportation mode is required').isLength({ min: 3 }),
    body('startDate', 'Start date is required').not().isEmpty(),
    body('endDate', 'End date is required').not().isEmpty(),
    body('estimatedCost', 'Estimated cost is required').isNumeric()
], async (req, res) => {
    try {
        const { destination, hotelType, transportationMode, startDate, endDate, estimatedCost } = req.body;
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            user: req.user.id,
            destinationName: destination,
            hotel: hotelType,
            transport: transportationMode,
            fromDate: startDate,
            toDate: endDate,
            cost: estimatedCost
        });

        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;
