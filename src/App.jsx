import { useState } from "react";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [{ id: crypto.randomUUID?.() || String(Date.now()), text }, ...prev]);
    setInput("");
  };

  const handleDelete = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Message board</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter message here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn-submit">Submit</button>
      </form>

      <ul className="message-list">
        {messages.map((m) => (
          <li key={m.id} className="message-card">
            <span>{m.text}</span>
            <button
              className="btn-delete"
              aria-label="delete message"
              onClick={() => handleDelete(m.id)}
              title="Delete"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


