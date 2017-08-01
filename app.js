// import express from our dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// initialize the app
const app = express();
// add dotenv files
require('dotenv').config();

//middewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//setting up port
const port = process.env.PORT || 3000;
// tell the app to listen to a specific port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// index route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

//error message
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
