const User = require('../models/user');
const bcypt = require ('bcryptjs');

const usersController = {};

usersController.index = (req, res) => {
    res.redirect('/delicio');
};

// steps the password goes through to get encrypted
usersController.create = (req, res, next) => {
    // how many times the password gets salted
    const salt = bcrypt.genSaltSync();
    //how the password goes into the user table (the encryped password)
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        username: req.body.username,
        password_digest: hash,
        email: req.body.email,
    }).then(newuser => {
        req.login(newuser, (err) => {
            if(err) return next (err);
            res.redirect('/user');
            // see outcome of encrypted password
            console.log(newuser);
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
};

module.exports = usersController;