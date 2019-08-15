const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('The best way to manage your Node app using Docker\n');
});
app.listen(3000);
console.log('Running on http://localhost:3000');
