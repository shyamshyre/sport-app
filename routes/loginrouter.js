'use strict'
const express = require('express');
const router = express.Router();


var logincontroller = require('../controller/logincontroller')

/* Public Routes*/

router.get('/register', logincontroller.register);
router.get('/forgotpasword', logincontroller.forgotpassword);


module.exports =router;