const express = require('express');
const morgan = require('morgan');



module.exports = function (app) {
    app.use(express.json());
    app.use(morgan('tiny'));
    app.use('/api/users', users);
    app.use(error);    
}