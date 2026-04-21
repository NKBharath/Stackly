import React, { useState } from "react";

function MiniChatApp() {
  // State for input field
  const [message, setMessage] = useState("");

  // State for storing messages
  const [messages, setMessages] = useState([]);

  // Handle sending message
  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Add new message to list
    setMessages([...messages, message]);

    // Clear input field
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <h2>Mini Chat App</h2>

      {/* Input Section */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          Send Message
        </button>
      </div>

      {/* Messages Display */}
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <p key={index} style={styles.message}>
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
}

// Simple styling
const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
  },
  button: {
    padding: "8px",
    cursor: "pointer",
  },
  chatBox: {
    marginTop: "20px",
    border: "1px solid #ccc",
    minHeight: "150px",
    padding: "10px",
    textAlign: "left",
  },
  message: {
    background: "#f1f1f1",
    padding: "5px",
    marginBottom: "5px",
    borderRadius: "5px",
  },
};

export default MiniChatApp;