require('dotenv').config(); //import dotenv
const express = require('express'); // Import express
const app = express(); // Create an instance of express
const cors = require('cors'); // CORS middleware
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/authRoutes.js'); // Import user routes
app.use(userRoutes); // Use user routes



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

