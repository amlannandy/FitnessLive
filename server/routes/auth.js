const express = require('express');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

const router = express.Router();

// @description   Get current logged in user
// @route         GET /api/v1/auth
// @access        Private
router.get('/', async (req, res) => {
  try {
    let token;
    // Get token from headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    // Make sure token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        errors: [{ msg: 'Not authorized to use this route ' }],
      });
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        errors: [{ msg: 'Not authorized to use this route ' }],
      });
    }

    res.status(200).json({
      success: true,
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      errors: [{ msg: 'Internal Server Error' }],
    });
  }
});

// @description   Log in existing user
// @route         POST /api/v1/auth/login
// @access        Public
router.post(
  '/login',
  [
    check('email', 'Invalid Email').isEmail(),
    check('password', 'Provide a password').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User doesn't exist" }] });
      }
      //Check password
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'Wrong password' }] });
      }
      const token = user.getSignedJWTToken();
      res.status(200).json({
        success: true,
        data: {
          token,
          user,
        },
      });
    } catch (error) {
      console.error(err.message);
      res.status(500).json({
        success: false,
        errors: [{ msg: 'Internal Server Error' }],
      });
    }
  }
);

// @description   Register new user
// @route         POST /api/v1/auth/register
// @access        Public
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      //Check if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      user = new User({ name, email, password });
      await user.save();
      const token = user.getSignedJWTToken();
      res.status(200).json({
        success: true,
        data: {
          token,
          user,
        },
      });
    } catch (error) {
      console.error(err.message);
      res.status(500).json({
        success: false,
        errors: [{ msg: 'Internal Server Error' }],
      });
    }
  }
);

module.exports = router;
