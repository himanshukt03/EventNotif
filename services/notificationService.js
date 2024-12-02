const cron = require('node-cron');
const { completeEvent, getEvents } = require('../services/eventService');

let clients = [];

function initializeWebSocket(wss) {
    wss.on('connection', (ws) => {
        console.log('Client connected');
        clients.push(ws);

        ws.send('Event vacation 2 starting in 5 minutes!');

        ws.on('close', () => {
            clients = clients.filter(client => client !== ws);
            console.log('Client disconnected');
        });
    });

    cron.schedule('* * * * *', () => {
        const now = new Date();
        const upcomingEvents = getEvents();
        
        upcomingEvents.forEach(event => {
            const eventTime = new Date(event.time);
            const diffMinutes = (eventTime.getTime() - now.getTime()) / 60000; 

            if (diffMinutes <= 5 && diffMinutes > 4) {
                notifyClients(`Event "${event.title}" is starting in 5 minutes!`);
            }

            if (diffMinutes <= 0) {
                completeEvent(event);
                notifyClients(`Event "${event.title}" has started and is completed.`);
            }
        });
    });
}

function notifyClients(message) {
    clients.forEach(client => {
        if (client.readyState === 1) {
            client.send(message);
        }
    });
}

module.exports = { initializeWebSocket };
