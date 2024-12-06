// create web server
const express = require('express');
const app = express();
// create a port
const port = 3000;
// use the static files
app.use(express.static('public'));
// use the comments.js
app.use('/comments', require('./comments.js'));
// listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});