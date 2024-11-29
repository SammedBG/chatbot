import React, { useState } from "react";

function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [listening, setListening] = useState(false);

    const handleSend = async () => {
        if (input.trim()) {
            setMessages([...messages, { sender: "User", text: input }]);
            setInput("");

            try {
                const response = await fetch("http://127.0.0.1:5000/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: input }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "Bot", text: data.response },
                ]);
                speak(data.response);
            } catch (error) {
                console.error("Error communicating with backend:", error.message);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "Bot", text: "Error: Unable to fetch response. Please try again later." },
                ]);
            }
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSend();
        }
    };

    const startListening = () => {
        if (!("webkitSpeechRecognition" in window)) {
            alert("Speech recognition not supported in this browser!");
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "en-US";
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            setListening(false);
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            setListening(false);
        };

        setListening(true);
        recognition.start();
    };

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
            <h2>AI Chatbot</h2>
            <div
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "15px",
                    height: "400px",
                    overflowY: "auto",
                    marginBottom: "20px",
                }}
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            marginBottom: "10px",
                            textAlign: message.sender === "User" ? "right" : "left",
                        }}
                    >
                        <strong>{message.sender}:</strong> {message.text}
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message"
                    style={{
                        flex: "1",
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        marginRight: "10px",
                    }}
                />
                <button onClick={handleSend} style={{ padding: "10px 20px" }}>
                    Send
                </button>
                <button
                    onClick={startListening}
                    style={{
                        padding: "10px",
                        marginLeft: "10px",
                        backgroundColor: listening ? "lightcoral" : "lightblue",
                    }}
                >
                    🎤 {listening ? "Listening..." : "Voice"}
                </button>
            </div>
        </div>
    );
}

export default App;
