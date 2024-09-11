import React from 'react';
import { useSelector } from 'react-redux';
import MessageList from './MessageList';
import InputArea from './InputArea';

function ChatInterface() {
  const status = useSelector((state) => state.chat.status);

  return (
    <div className="chat-interface">
      <MessageList />
      <InputArea />
      {status === 'loading' && <div>AI is thinking...</div>}
    </div>
  );
}

export default ChatInterface;