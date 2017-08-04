const express = require('express');
const userRoutes = express.Router();
const recipesRoutes = require('../routes/recipe-routes');
const recipesController = require('../controllers/recipes-controller');
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');

userRoutes.get('/', authHelpers.loginRequired, usersController.index);
userRoutes.post('/', recipesController.create);

userRoutes.get('/add', (req, res) => {
    res.render('user/recipe-add',{
        currentPage: 'add'
    });
});

userRoutes.post('/addRecipe', (req, res)=>{
    console.log(req.body.user);
    console.log(req.body.recipe);
    // res.redirect()
})


userRoutes.use('/recipes', recipesRoutes);

module.exports = userRoutes;