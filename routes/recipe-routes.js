const express = require('express');
const recipesRoutes = express.Router();
const recipesController = require('../controllers/recipes-controller');
const recipeHelpers = require('../services/recipes/recipes-helper');

recipesRoutes.get('/', recipesController.index);

recipesRoutes.get('/add', recipesController.create);

recipesRoutes.get('/:healthlabels', recipesController.category);
recipesRoutes.get('/:healthlabels/:id', recipesController.id);

module.exports = recipesRoutes;

