const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const express = require('express');

const connectDB = require('./utils/db');

// Load environment variables
dotenv.config({ path: './.env' });

// Connect to database
connectDB();

// Instantiate app
const app = express();

// Body Parser
app.use(express.json());

//Dev loggin middleware
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// To allow third party usage in production
app.use(cors());

// Assign routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/tracker', require('./routes/tracker'));

// Get port number and mode from .env
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || 'production';

// Start server
const server = app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} in ${MODE} mode.`.blue.bold.inverse
  );
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(colors.red.underline(`Error: ${err.message}`));
  //Close server and exit process
  server.close(() => process.exit(1));
});
