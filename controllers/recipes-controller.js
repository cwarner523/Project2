const Recipe = require('../models/recipe')
const recipesController = {};

recipesController.index = (req, res) => {
    res.render('categories/categories-index', {
       currentPage:'Categories'
    });
}

recipesController.category = (req, res) => {
    Recipe.findById(req.params.healthlabels)
    .then(healthlabel => {
        res.render('recipe/recipe-single', {
            message: 'ok',
            data: healthlabel,
          });
        }).catch(err => {
        console.log(err);
        res.status(500).json({
        message: 'Not found!',
        error: err,
      });
    });
};


module.exports = recipesController;