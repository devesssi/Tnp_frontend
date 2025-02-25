import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your backend URL

const Chat = ({ communityId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.emit("joinRoom", communityId);

    socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.emit("leaveRoom", communityId);
      socket.off("receiveMessage");
    };
  }, [communityId]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      const chatMessage = {
        communityId,
        text: message,
        sender: "User",
      };

      socket.emit("sendMessage", chatMessage);
      setMessages((prevMessages) => [...prevMessages, chatMessage]);
      setMessage("");
    }
  };

  return React.createElement(
    "div",
    { style: styles.chatContainer },
    React.createElement("h3", null, "Community Chat"),
    React.createElement(
      "div",
      { style: styles.messages },
      messages.map((msg, index) =>
        React.createElement(
          "div",
          { key: index, style: styles.message },
          React.createElement("strong", null, msg.sender + ": "),
          msg.text
        )
      )
    ),
    React.createElement(
      "div",
      { style: styles.inputContainer },
      React.createElement("input", {
        type: "text",
        placeholder: "Type a message...",
        value: message,
        onChange: (e) => setMessage(e.target.value),
        style: styles.input,
      }),
      React.createElement(
        "button",
        {
          onClick: sendMessage,
          style: styles.sendButton,
        },
        "Send"
      )
    )
  );
};

const styles = {
  chatContainer: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    width: "300px",
    backgroundColor: "#f9f9f9",
    position: "fixed",
    bottom: "10px",
    right: "10px",
  },
  messages: {
    maxHeight: "200px",
    overflowY: "auto",
    marginBottom: "10px",
  },
  message: {
    backgroundColor: "#e3e3e3",
    padding: "5px",
    borderRadius: "5px",
    marginBottom: "5px",
  },
  inputContainer: {
    display: "flex",
  },
  input: {
    flex: 1,
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  sendButton: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginLeft: "5px",
  },
};

export default Chat;