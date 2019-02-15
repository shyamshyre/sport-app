'use strict'
const config = require('../config');
const jwt = require('jsonwebtoken');
const secret = require('../config/components/config.json');

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
    console.log("Inside User - Service - Authenticate Method");
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id }, "secret");
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

async function getUsers() {
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

