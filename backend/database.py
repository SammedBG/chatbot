# database.py
from pymongo import MongoClient

# Initialize the MongoDB client
client = MongoClient("mongodb://localhost:27017/")
db = client['chatbot_database']
collection = db['chat_history']

def save_message(user, bot_response):
    """Store user and bot messages in MongoDB."""
    collection.insert_one({"user": user, "bot_response": bot_response})

def get_chat_history():
    """Retrieve the last few messages for context or history display."""
    return list(collection.find().sort("_id", -1).limit(10))
