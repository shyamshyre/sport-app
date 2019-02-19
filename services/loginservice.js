'use strict'
const bcrypt = require('bcrypt');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const config = require('../config');
/**
 * 
 */
exports.login = function(req,res){
    console.log("Inside Login - Service -Login Method");
    res.send('Inside Login - Service -Login Method');
}
exports.register = function(req,res){
    var username= req.body.username;
    var password = req.body.password;
    var bcryptpassword = bcrypt.hashSync(password,10);
    
    var signOptions = {
        issuer:  "ICONMA",
        subject:  "token",
        audience:  "Client Identity",
        expiresIn:  "12h",
        algorithm:  "RS256"
       };

    var userobj = new User({username:username,password:bcryptpassword,admin:true});
    console.log({userobj});
        userobj.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully');
        const token = jwt.sign({username}, "secret");
        console.log("Token",token);

        res.json({ success: token });
      });
    
      console.log("Inside Login - Service - Register Method");
}
exports.forgotpassword = function(req,res){
    console.log("Inside Login - Service - ForgotPassword Method");
    res.send('Inside Login - Service - ForgotPassword Method');
}