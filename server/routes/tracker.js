const express = require('express');
const { check, validationResult } = require('express-validator');

const sendMail = require('../utils/sendMail');
const generateHealthData = require('../utils/generateHealthData');
const generateTestResults = require('../utils/generateTestResults');

const router = express.Router();

// @description   Get mock tracker data
// @route         GET /api/v1/tracker
// @access        Public
router.get('/', (req, res) => {
  const healthData = generateHealthData();
  res.status(200).json({
    success: true,
    data: healthData,
  });
});

// @description   Post tracker data to get test results
// @route         POST /api/v1/tracker/results
// @access        Public
router.post(
  '/results',
  [
    check('heartRate', 'Heart Rate is required').exists(),
    check('bloodPressure', 'Blood Pressure is required').exists(),
    check('glucose', 'Gluscoe is required').exists(),
    check('bodyTemperature', 'Body Temperature is required').exists(),
    check('respiration', 'Respiration is required').exists(),
    check('oxygenSaturation', 'Oxygen Saturation is required').exists(),
    check('electroCardiogram', 'Electro Cardiogram is required').exists(),
    check('steps', 'Steps is required').exists(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    const healthData = req.body;
    const results = generateTestResults(healthData);
    res.status(200).json({
      success: true,
      data: { ...results },
    });
  }
);

// @description   Send heatlh data as email to user
// @route         POST /api/v1/tracker/sendmail
// @access        Public

router.post(
  '/sendmail',
  [check('email', 'Please provide a sender address').exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    const { email } = req.body;
    const healthData = generateHealthData();
    const arr = Object.entries(healthData.data);
    let text = 'Hello! Here is your daily test report.\n';
    arr.forEach(a => (text += `${a[0]} - ${a[1]}, `));
    await sendMail({
      email: email,
      subject: `Fitness Live Daily Test Report`,
      message: text,
    });
    res.status(200).json({
      success: true,
      data: text,
    });
  }
);

module.exports = router;
