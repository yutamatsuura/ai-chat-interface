import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../store/chatSlice';
import styles from './InputArea.module.css';

function InputArea() {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputArea}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力..."
      />
      <button type="submit">送信</button>
    </form>
  );
}

export default InputArea;