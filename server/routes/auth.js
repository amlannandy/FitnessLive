const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    success: true,
    data: 'Get current user route',
  });
});

router.post('/login', (req, res, next) => {
  res.status(200).json({
    success: true,
    data: 'Login route',
  });
});

router.post('/register', (req, res, next) => {
  res.status(200).json({
    success: true,
    data: 'Register route',
  });
});

module.exports = router;
