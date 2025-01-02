# AI Chatbot

This project is an AI chatbot application that uses a React frontend and a Flask backend. The chatbot leverages the `facebook/blenderbot-400M-distill` model for conversational AI and integrates with MongoDB for storing chat history.

## Project Structure
gitignore backend/ pycache/ app.py database.py requirements.txt venv/ Include/ Lib/ site-packages/ pyvenv.cfg Scripts/ pycache/ activate activate.bat Activate.ps1 clear_comtypes_cache.exe convert-caffe2-to-onnx.exe convert-onnx-to-caffe2.exe deactivate.bat f2py.exe flask.exe huggingface-cli.exe isympy.exe normalizer.exe ... share/ frontend/ chatbot-frontend/ package.json public/ README.md src/ package.json README.md

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.x
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Create a virtual environment:
    ```sh
    python -m venv venv
    ```

3. Activate the virtual environment:
    - On Windows:
        ```sh
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```

4. Install the required Python packages:
    ```sh
    pip install -r requirements.txt
    ```

5. Start the Flask server:
    ```sh
    python app.py
    ```

### Frontend Setup

1. Navigate to the [chatbot-frontend](http://_vscodecontentref_/8) directory:
    ```sh
    cd frontend/chatbot-frontend
    ```

2. Install the required npm packages:
    ```sh
    npm install
    ```

3. Start the React development server:
    ```sh
    npm start
    ```

### Running the Application

- The React frontend will be available at [http://localhost:3000](http://localhost:3000).
- The Flask backend will be available at [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Project Details

### Backend

- [app.py](http://_vscodecontentref_/9): Main Flask application file.
- [database.py](http://_vscodecontentref_/10): MongoDB interaction functions.
- [requirements.txt](http://_vscodecontentref_/11): Python dependencies.

### Frontend

- [App.js](http://_vscodecontentref_/12): Main React component for the chatbot interface.
- [index.html](http://_vscodecontentref_/13): HTML template.
- [package.json](http://_vscodecontentref_/14): npm dependencies and scripts.

## .gitignore

The [.gitignore](http://_vscodecontentref_/15) file includes the following entries to exclude unnecessary files from version control:

## License

This project is licensed under the MIT License.
