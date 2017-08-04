const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersController = {};

usersController.index = (req, res) => {
    //after registering it goes to this route
    // get all user's recipes (User.findAllRecipes)
    console.log(req.user);
    res.render('user/user-index', {
      user: req.user,
      currentPage:'Profile'
  });
};

usersController.saveRecipe = (req, res) => {
    console.log(req.user);
    User.addRecipeToUser({
        user_id:req.user.id, 
        recipe_id:req.params.id,
    }).then(recipes => {
        // res.render('test', {
        //     data: recipes,
        //     currentPage: 'Saved'
        // });
        console.log(recipes);
        res.redirect('/user');
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
}

usersController.saved = (req, res) => {
    User.findAllRecipes(req.user.id).then(recipe => {
    res.render('/user/save-recipes', {
        currentpage: 'userprofile',
        message: 'ok',
        data: recipes
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

usersController.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

// usersController.create =  (req, res) => {
//     User.create({
//         userId: req.user.id,
//         recipeId: req.params.id,
//     }).then(() => {
//         res.redirect('/user');
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({
//             message: 'Could not create successfully',
//             error: err,
//         });
//     });
// };

module.exports = usersController;