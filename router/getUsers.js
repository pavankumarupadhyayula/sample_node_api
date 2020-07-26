'use strict';
const express = require('express');
const router = express.Router();
const dbUsers = require('../database/users.json');

router.get('/users',(req, res)=>{
    res.json(dbUsers);
});

router.get('/user/:id', (req, res) => {
    const queryId = parseInt(req.params.id);
    const user = dbUsers.filter(value => value.id === queryId)[0];
    if (!user){
        res.send('User Not Found!')
    }else {
        res.json(user);
    }
});

module.exports = router;