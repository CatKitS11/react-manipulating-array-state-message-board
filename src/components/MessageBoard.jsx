import { useState } from "react";

function MessageBoard() {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, messageText]);
    setMessageText("");
  };



  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handleSubmit}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </label>
        <button type="submit" className="submit-message-button">
          Submit
        </button>
      </form>
      <div class="board">
        {messages.map((message, i) => (
          <div className="message" key={i}>
            <h1>{message}</h1>
            <button className="delete-button" onClick={() => setMessages(messages.filter((_, index) => index !== i))}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
