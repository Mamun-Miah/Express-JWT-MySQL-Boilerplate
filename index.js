require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/authRoutes.js');
app.use(userRoutes);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

