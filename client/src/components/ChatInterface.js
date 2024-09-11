import React from 'react';
import { useSelector } from 'react-redux';
import MessageList from './MessageList';
import InputArea from './InputArea';
import styles from './ChatInterface.module.css';

function ChatInterface() {
  const status = useSelector((state) => state.chat.status);

  return (
    <div className={styles.chatInterface}>
      <MessageList />
      <InputArea />
      {status === 'loading' && <div className={styles.loadingIndicator}>AI is thinking...</div>}
    </div>
  );
}

export default ChatInterface;