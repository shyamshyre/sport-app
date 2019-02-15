'use strict'

var userService = require('../services/userservice');

exports.register = function(req,res){
    console.log("Inside User - Controller -Register Method");
   userService.register(req,res);
}

exports.forgotpassword = function(req,res){
    console.log("Inside User - Controller -Forgot Password Method");
    userService.forgotPassword(req,res);
}

exports.authenticate = function(req,res){
    console.log("Inside User - Controller -Authenticate Method");
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

exports.getUsers = function(req,res,next){
    console.log("Inside User - Controller -getAll Method");
    userService.getUsers()
    .then(users => res.json(users))
    .catch(err => next(err));
}   