# EventNotif - Simple Event Notification API

EventNotif is a Node.js application that provides a simple API for managing and notifying users about upcoming events. It uses Express for the API, WebSockets for real-time notifications, and Cron jobs for automated event checks.

## Features

- Create new events with a title, description, and scheduled time
- Retrieve a list of all upcoming events
- Receive real-time notifications 5 minutes before an event starts via WebSocket
- Mark events as completed once they start
- Automatically check for events and send notifications using Cron jobs
- Log completed events to a file

## Technologies Used

- **Node.js**
- **Express**
- **WebSocket (ws package)**
- **node-cron**

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/himanshukt03/EventNotif.git
    ```

2. Navigate to the project directory:
    ```bash
    cd EventNotif
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    node src/index.js
    ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Add Event: `POST /events`

- **Request Body**:
    ```json
    {
      "title": "Event Name",
      "description": "Event Description",
      "time": "YYYY-MM-DDTHH:mm:ssZ"
    }
    ```

### Get Upcoming Events: `GET /events`

- Retrieves a list of all upcoming events.

## WebSocket Connection

- Connect to `ws://localhost:3000/ws`
- The server will send notifications 5 minutes before an event starts.

## Cron Job

- A Cron job runs every minute to check for events.
  - It sends a notification 5 minutes before an event starts.
  - It marks events as completed once they begin.

## Logging

- Completed events are saved to a log file.

Feel free to explore and extend the functionality of this project as needed.
