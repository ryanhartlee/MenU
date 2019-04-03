// ---DEPENDENCIES---
const express = require('express');
const app = express();

// Set Express to run on PORT 5000
const port = process.env.PORT || 5000;

// ---MODELS---
// (Require models here)

// Console.log to confirm server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// ---ROUTES---
// Create a GET route (this will eventually be fetched from within our client side React app)
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });