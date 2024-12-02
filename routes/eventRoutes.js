const express = require('express');
const { addEvent, getEvents } = require('../services/eventService');
const router = express.Router();

router.post('/', (req, res) => {
    const { title, description, time } = req.body;
    if (!title || !time) {
        return res.status(400).json({ error: "Title and time are required" });
    }
    const event = addEvent({ title, description, time });
    res.status(201).json(event);
});

router.get('/', (req, res) => {
    const events = getEvents();
    res.status(200).json(events);
});

module.exports = router