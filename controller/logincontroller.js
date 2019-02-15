'use strict'

var loginService = require('../services/loginservice')
/**
 * 
 */
exports.login = function(req,res){
    console.log("Inside Login - Controller -Login Method");
    loginService.login(req,res);
}

exports.register = function(req,res){
    console.log("Inside Login - Controller - Register Method");
    loginService.register(req,res);
}
exports.forgotpassword = function(req,res){
    console.log("Inside Login - Controller - ForgotPassword Method");
    loginService.register(req,res);
}
