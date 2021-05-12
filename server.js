// Dependancies
const express = require('express');

// Express.js configuration
const app = express();

const PORT = process.env.PORT || 8080;

// Data handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});