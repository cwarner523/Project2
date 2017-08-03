const Recipe = require('../models/recipe')
const recipesController = {};

recipesController.index = (req, res) => {
    Recipe.findAll().then(labels =>{
        console.log(labels);
    res.render('categories/categories-index', {
       currentPage:'Categories',
       data: labels
    });
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })

};

recipesController.category = (req, res) => {
    Recipe.findById(req.params.healthlabels)
    .then(recipes => {
        console.log(recipes,'fdiufbuisfhihdifu');
        res.render('categories/categories-single', {
            currentPage:'subCategories',
            message: 'this works',
            data: recipes,
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