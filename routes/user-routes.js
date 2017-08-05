const express = require('express');
const userRoutes = express.Router();
const recipesRoutes = require('../routes/recipe-routes');
const recipesController = require('../controllers/recipes-controller');
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');


userRoutes.delete('/savedRecipe/:id', usersController.delete);
userRoutes.get('/', authHelpers.loginRequired, usersController.index);
userRoutes.post('/', recipesController.create);

userRoutes.get('/add', (req, res) => {
    res.render('user/recipe-add',{
        currentPage: 'add'
    });
});

userRoutes.post('/addRecipe/:id', usersController.saveRecipe);

userRoutes.get('/savedRecipe/:id', usersController.edit);
userRoutes.put('/savedRecipe/:id', usersController.update);

userRoutes.get('/savedRecipe', usersController.saved);
userRoutes.use('/recipes', recipesRoutes);


module.exports = userRoutes;