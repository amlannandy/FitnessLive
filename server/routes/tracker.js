const express = require('express');

const generateHealthData = require('../utils/generateHealthData');

const router = express.Router();

router.get('/', (req, res, next) => {
  const healthData = generateHealthData();
  res.status(200).json({
    success: true,
    data: healthData,
  });
});

module.exports = router;
