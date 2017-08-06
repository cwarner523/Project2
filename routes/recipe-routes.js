const express = require('express');
const recipesRoutes = express.Router();
const recipesController = require('../controllers/recipes-controller');
const authHelpers = require('../services/auth/auth-helpers');
const recipeHelpers = require('../services/recipes/recipes-helper');

recipesRoutes.get('/', recipesController.index);

recipesRoutes.get('/add', authHelpers.loginRequired, recipesController.create);

recipesRoutes.get('/healthlabels/edit/:id', recipesController.edit);
recipesRoutes.put('/healthlabels/edit/:id', recipesController.update);

recipesRoutes.get('/:healthlabels', authHelpers.loginRequired, recipesController.category);
recipesRoutes.get('/:healthlabels/:id', recipesController.id);

// recipesRoutes.get('/:id/edit', authHelpers.loginRequired, recipesController.edit);
// recipesRoutes.put('/:id', authHelpers.loginRequired, recipesController.update);


module.exports = recipesRoutes;

