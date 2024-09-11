import React from 'react';
import { useSelector } from 'react-redux';

function MessageList() {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.role}`}>
          <strong>{message.role === 'user' ? 'You:' : 'AI:'}</strong> {message.content}
        </div>
      ))}
    </div>
  );
}

export default MessageList;