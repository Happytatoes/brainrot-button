# Brainrot Button (Frontend)

My first ever fullstack app! This frontend connects to a global counter API and updates the value whenever a user presses a button. The goal was to build something minimal, collaborative, and a little absurd.

## Purpose
A playful introduction to fullstack development, designed to show a shared global state that updates in real-time (or refresh-time) across all users.

## Functionality
- Renders a brainrot button
- Displays a counter representing **global presses**
- Sends POST requests to backend to increment the count

## Tech Stack
- HTML
- CSS
- JavaScript (Vanilla)

## How It Works
1. User clicks the button
2. A request is sent to the backend
3. Backend increments a global counter stored in a database
4. The updated value is sent back and displayed

## Related Projects
- brainrot-button-backend: Node/Express API that handles global state