import { useState } from "react";

function MessageBoard() {
  const [ messageText, setMessageText ] = useState("");
  const [ messages, setMessages ] = useState([]);

  const handleAddMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, messageText]);
    setMessageText("");
  };

  const handleDeleteMessage = (messageIndex) => {
    const newMessages = messages.filter((_, idx) => idx !== messageIndex);
    setMessages(newMessages);
  };
  

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handleAddMessage}>
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
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </form>
      <div className="board">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button className="delete-button" onClick={()=>handleDeleteMessage(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default MessageBoard;
