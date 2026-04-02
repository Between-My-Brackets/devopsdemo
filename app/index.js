const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Home Page
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the DevOps Demo App!",
    status: "Success",
    version: "1.0.0"
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString()
  });
});

// API version endpoint
app.get('/version', (req, res) => {
  res.json({
    version: '1.0.0'
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
  });
}

module.exports = app;
