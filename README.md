AI Chatbot Project Documentation

Overview

This project is a simple AI chatbot application that enables users to interact through text and voice input. The backend is powered by Flask, while the frontend is built with React. The chatbot leverages a pre-trained conversational AI model to generate responses. Additionally, it supports voice input and text-to-speech for a more interactive experience.


---

Table of Contents

1. Features


2. Tech Stack


3. Installation

Backend Setup

Frontend Setup



4. Configuration


5. Usage


6. Project Structure


7. Dependencies


8. Troubleshooting


9. Contributing


10. License




---

Features

Text-based Chat: Users can input text messages and receive AI-generated responses.

Voice Input: Voice recognition allows users to interact through speech.

Text-to-Speech: The chatbot can read responses aloud using text-to-speech technology.

Chat History: Stores and displays a history of the conversation.



---

Tech Stack

Frontend: React, JavaScript, HTML, CSS.

Backend: Flask (Python), Transformers (AI model).

Database: Supports saving chat history (optional).

Speech Processing: Web Speech API (webkitSpeechRecognition), pyttsx3 for text-to-speech.



---

Installation

Prerequisites

Python 3.7+

Node.js and npm

Git (optional for cloning the repository)



---

Backend Setup

1. Clone the Repository:

git clone <repository-url>
cd <repository-folder>/backend


2. Create a Virtual Environment:

python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows


3. Install Dependencies:

pip install -r requirements.txt


4. Run the Flask Server:

python app.py




---

Frontend Setup

1. Navigate to the Frontend Directory:

cd ../frontend


2. Install Dependencies:

npm install


3. Start the Development Server:

npm start




---

Configuration

The Flask server runs on http://127.0.0.1:5000 by default.

The React frontend is set to communicate with the backend at this address. Update the API URL in App.js if necessary.



---

Usage

1. Open the frontend in your browser (http://localhost:3000 by default).


2. Type a message in the input box or click the Voice button to start voice input.


3. Press Send or hit Enter to submit your message.


4. The chatbot will display and speak the response.




---

Project Structure

├── backend
│   ├── app.py             # Main Flask application
│   ├── database.py        # Database functions for chat history
│   └── requirements.txt   # Python dependencies
└── frontend
    ├── src
    │   ├── App.js         # React main component
    │   └── index.css      # Styling
    ├── public
    └── package.json       # Node.js dependencies


---

Dependencies

Backend

Flask

transformers

pyttsx3

Flask-CORS


Frontend

React

Web Speech API (Browser-based)



---

Troubleshooting

Backend not running:

Ensure Flask is running on port 5000.

Activate the virtual environment and check for any errors.


Speech recognition issues:

Ensure your browser has microphone access permissions.

Use Google Chrome for better compatibility with the Web Speech API.


API connection errors:

Confirm the backend URL in App.js matches the running Flask server address.
