'use strict'
const express = require('express');
const router = express.Router();
var usercontroller = require('../controller/usercontroller')
const middleware = require('../middleware/jwt');


router.use(middleware);
router.post('/authenticate', usercontroller.authenticate);
router.get('/getUsers', usercontroller.getUsers);


module.exports =router;