const express = require('express');
const recipesRoutes = express.Router();
const recipesController = require('../controllers/recipes-controller');
const recipeHelpers = require('../services/recipes/recipes-helper');

recipesRoutes.get('/', recipesController.index);
recipesRoutes.get('/:healthlabel', recipesController.category);

module.exports = recipesRoutes;

