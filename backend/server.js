const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

app.listen(5000, '0.0.0.0', () => {
  console.log(`Server running on port 5000`);
});

