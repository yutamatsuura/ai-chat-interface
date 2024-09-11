import React, { useState } from 'react';

function InputArea() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここでメッセージを送信する処理を追加します
    console.log('メッセージを送信:', message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-area">
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