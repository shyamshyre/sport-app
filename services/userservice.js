'use strict'
const config = require('../config');
const jwt = require('jsonwebtoken');
//const secret = require('../config/components/config.json');

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports={
    authenticate,
    getUsers,
    forgotPassword,
    register
    
    
}

async function authenticate({ username, password }) {
    console.log(username);
    console.log(username);
 
}

async function getUsers() {
    console.log("Inside get Users");
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function forgotPassword(req,res) {
   // res.send("Inside UserService - ForgotPassword Method");
}

async function register(req,res) {
    res.send("Inside UserService - Register Method");
}

