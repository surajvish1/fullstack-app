const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node backend!' });
});

app.listen(PORT,'0.0.0.0' , () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

