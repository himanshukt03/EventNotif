const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const eventRoutes = require('./routes/eventRoutes');
const { initializeWebSocket } = require('./services/notificationService');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());
app.use('/events', eventRoutes);

initializeWebSocket(wss);

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
