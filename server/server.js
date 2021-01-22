const cors = require('cors');
const colors = require('colors');
const express = require('express');

const generateHealthData = require('./generateHealthData');

const app = express();

// To allow third party usage in production
app.use(cors());

app.use('/', async (req, res, next) => {
  const healthData = generateHealthData();
  res.status(200).json({
    success: true,
    data: healthData,
  });
});

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`.green.bold.inverse);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(colors.red.underline(`Error: ${err.message}`));
  //Close server and exit process
  server.close(() => process.exit(1));
});
