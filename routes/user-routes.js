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

userRoutes.post('/addRecipe/:id', usersController.saveRecipe);
//(req, res)=>{
    //console.log(req.params.id);
    //console.log(req.user);
    //console.log(req.body.recipe);
    // res.redirect()
//})

userRoutes.post('/savedRecipe', usersController.saved);

userRoutes.use('/recipes', recipesRoutes);

module.exports = userRoutes;