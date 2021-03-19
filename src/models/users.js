'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); //verify jwt

const users = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true, default: 'user', enum: ['user', 'admin', 'mod']}
});

const secret = process.env.SECRET || 'whoSpilledThebeans?';

module.exports = mongoose('users', users);