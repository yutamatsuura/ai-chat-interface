import React from 'react';
import { useSelector } from 'react-redux';
import styles from './MessageList.module.css';

function MessageList() {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className={styles.messageList}>
      {messages.map((message, index) => (
        <div key={index} className={`${styles.message} ${styles[message.role]}`}>
          <strong>{message.role === 'user' ? 'You:' : 'AI:'}</strong> {message.content}
        </div>
      ))}
    </div>
  );
}

export default MessageList;