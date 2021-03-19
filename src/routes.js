'use strict';

const express = require('express');

const acl = require('./auth/acl.js');
const basicAuth = require('./auth/basicAuth.js');
const bearerAuth = require('./auth/bearerAuth');
const Users = require('./models/users.js');

const secure = express.Router();

secure.post('/register', basicAuth, (req, res) => {
    let user = new Users(req.body)
})