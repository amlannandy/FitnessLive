const express = require('express');

const generateHealthData = require('../utils/generateHealthData');

const router = express.Router();

// @description   Get mock tracker data
// @route         GET /api/v1/tracker
// @access        Public
router.get('/', (req, res, next) => {
  const healthData = generateHealthData();
  res.status(200).json({
    success: true,
    data: healthData,
  });
});

// @description   Post tracker data to get test results
// @route         POST /api/v1/tracker/results
// @access        Public
router.post('/tracker', (req, res, next) => {
  res.status(200).json({
    success: true,
    data: 'Test results route',
  });
});

module.exports = router;
