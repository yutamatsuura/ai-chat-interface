import React from 'react';
import MessageList from './MessageList';
import InputArea from './InputArea';

function ChatInterface() {
  return (
    <div className="chat-interface">
      <MessageList />
      <InputArea />
    </div>
  );
}

export default ChatInterface;