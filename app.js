require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes.js'); // Adjust the path as necessary

// Configure CORS with environment variable
const corsOrigin = process.env.CORS_ORIGIN; // Replace with your front-end domain

const corsOptions = {
  origin: corsOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: corsOrigin ? true : undefined // Set credentials only if origin is defined
};

app.use(cors(corsOptions));

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Body parser middleware
app.use(express.json());

// Handle preflight requests (without credentials header)
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.sendStatus(204); // No content
  }
  next();
});

// Use routes
app.use('/api', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

module.exports = app;
