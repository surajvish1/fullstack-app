
import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="App">
      <h1>React Frontend</h1>
      <button onClick={fetchMessage}>Fetch Message</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
