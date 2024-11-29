from flask import Flask, request, jsonify
from transformers import pipeline, Conversation
import pyttsx3
from flask_cors import CORS
from database import save_message, get_chat_history  # Importing database functions
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Load the conversational AI model
try:
    app.logger.info("Loading the chatbot model...")
    chatbot = pipeline("conversational", model="facebook/blenderbot-400M-distill")
    app.logger.info("Chatbot model loaded successfully.")
except Exception as e:
    app.logger.error(f"Error loading chatbot model: {e}")

# Initialize text-to-speech engine
engine = pyttsx3.init()

def speak(text):
    """Convert text response to speech."""
    try:
        engine.say(text)
        engine.runAndWait()
    except Exception as e:
        app.logger.error(f"Text-to-speech error: {e}")

@app.route("/chat", methods=["POST"])
def chat():
    try:
        # Get user input
        user_input = request.json.get("message")
        if not user_input:
            app.logger.error("No message provided in request.")
            return jsonify({"error": "No message provided"}), 400

        app.logger.info(f"Received user input: {user_input}")

        # Use the conversational pipeline
        conversation = Conversation(user_input)
        result = chatbot(conversation)
        bot_response = (
            conversation.generated_responses[-1]
            if conversation.generated_responses
            else "I'm sorry, I couldn't generate a response."
        )

        app.logger.info(f"Generated bot response: {bot_response}")

        # Store the conversation in the database
        save_message(user_input, bot_response)

        # Convert bot response to speech
        speak(bot_response)

        return jsonify({"response": bot_response})

    except Exception as e:
        app.logger.error(f"Error in /chat endpoint: {e}")
        return jsonify({"response": "Error: Unable to fetch response. Please try again later."}), 500

@app.route("/history", methods=["GET"])
def history():
    """Endpoint to fetch chat history."""
    try:
        history = get_chat_history()
        return jsonify(history)
    except Exception as e:
        app.logger.error(f"Error fetching chat history: {e}")
        return jsonify({"error": "Could not fetch chat history."}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
