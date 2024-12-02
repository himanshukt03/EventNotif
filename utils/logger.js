const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../data/events.json');

function saveCompletedEvent(event) {
    const completedEvents = fs.existsSync(logFilePath)
        ? JSON.parse(fs.readFileSync(logFilePath, 'utf8'))
        : [];
    completedEvents.push(event);
    fs.writeFileSync(logFilePath, JSON.stringify(completedEvents, null, 2));
}

module.exports = { saveCompletedEvent };
