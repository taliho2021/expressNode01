const mongoose = require('mongoose');
const router = require('express').Router();   
const User = require('../models/user');
const passport = require('passport');
const utils = require('../lib/utils');
const { request } = require('../app');

// TODO
router.get('/protected', (req, res, next) => {
  res.status(200).json({
    message: 'Hanling GET requets to /users'
  });
});

// TODO
router.post('/login', function(req, res, next) => {
  const user =new User ({
    name: req.body.name,
    username: request.body.username,
    password: request.body.password
  });
  res.status(201).json({
    message: ' Handling POST requqests to /users'
  })
});

// TODO
router.post('/register', function(req, res, next){});

module.exports = router;