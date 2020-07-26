'use strict';
const express = require('express');
const app = express();
const router = require('./router/getUsers');

const API_PORT = process.env.PORT || 4000;
app.set('PORT', API_PORT);
app.use('/',router);


app.listen(app.get('PORT'),()=>{
    const temp = `API server is up and running on http://localhost:${app.get('PORT')}`;
    console.log(temp);
});