require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes.js');  // Adjust the path as necessary

// Configure CORS
const corsOptions = {
  origin: 'https://frontend-service-4snlfkepaq-uc.a.run.app',  // Your frontend URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Body parser middleware
app.use(express.json());

// Use routes
app.use('/api', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

module.exports = app;
