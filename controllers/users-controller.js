const User = require('../models/user');
const bcypt = require ('bcryptjs');

const usersController = {};

usersController.index = (req, res) => {
    res.redirect('/delicio');
};

usersController.create = (req, res, next) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        username: req.body.username,
        password_digest: hash,
        email: req.body.email,
    }).then(newuser => {
        req.login(newuser, (err) => {
            if(err) return next (err);
            res.redirect('/user');
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
};

module.exports = usersController;