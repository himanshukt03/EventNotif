const { saveCompletedEvent } = require('../utils/logger');
const events = [];

function addEvent(event) {
    const eventWithId = { id: Date.now(), ...event };
    eventWithId.time = new Date(eventWithId.time).toISOString();
    events.push(eventWithId);

    events.sort((a, b) => new Date(a.time) - new Date(b.time));
    return eventWithId;
}

function getEvents() {
    const now = new Date();
    return events.filter(event => new Date(event.time) > now);
}

function completeEvent(event) {
    saveCompletedEvent(event);

    const index = events.findIndex(e => e.id === event.id);
    if (index > -1) events.splice(index, 1);
}

module.exports = { addEvent, getEvents, completeEvent };
