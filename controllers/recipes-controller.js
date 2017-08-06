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
    Recipe.findByLabel(req.params.healthlabels)
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

recipesController.id = (req, res) => {
    Recipe.findRecipe(req.params.id)
    .then(recipes => {
        console.log(recipes,'fdiufbuisfhihdifu');
        console.log(req.user);
        res.render('categories/recipes-single', {
            currentPage:'subCategories',
            message: 'this works',
            user: req.user,
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


recipesController.create = (req, res) => {
    Recipe.create({
        title: req.body.title,
        servingsize: req.body.servingsize,
        healthlabels: req.body.healthlabels,
        ingredients: req.body.ingredients,
        calories: req.body.calories,
        url: req.body.url,
        image: req.body.image,
    }).then(() => {
        res.redirect('/user');
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Could not create successfully',
            error:err,
        });
    });
};


recipesController.edit = (req, res) => {
     User.findById(req.params.id)
    .then(recipes => {
        res.render('categories/recipe-edit', {
             data: recipes,
            })
        }).catch (err => {
            console.log(err);
         res.status(500).json({err});
     });
 }

recipesController.update = (req, res) => {
     User.update({
         title: req.body.title,
         servingsize: req.body.servingsize,
         healthlabels: req.body.healthlabels,
         ingredients: req.body.ingredients,
        calories: req.body.calories,
         url: req.body.url,
         image: req.body.image,
    }, req.params.id).then(recipes => {
         res.redirect('/user/savedRecipe');
     }).catch(err => {
         console.log(err);
         res.status(500).json({ err });
     });
 }


module.exports = recipesController;