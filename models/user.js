const db = require('../db/config');

const User = {};

User.findByUserName = (username) => {
    return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
    `, [username]);
};

User.create = (user) => {
    return db.one(`
    INSERT INTO users
    (username, password_digest, email, firstname, lastname)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [user.username, user.password_digest, user.email, user.firstname, user.lastname]);
};

User.addRecipeToUser = (recipe) => {
    console.log('ajhsbhabvsfdhjbbdf');
    console.log(recipe.user_id);
    console.log(recipe.recipe_id);
    return db.many(`
    INSERT INTO users_recipes
    (user_id, recipe_id, comments)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [recipe.user_id, recipe.recipe_id, null]);
} 

User.findAllRecipes = (id) => {
    return db.query(`
    SELECT recipes.* FROM recipes
    JOIN users_recipes ON users_recipes.recipe_id = recipes.id
    JOIN users ON users_recipes.user_id = users.id WHERE uses.id = $1
    `, [id])
}

// User.findUserRecipes
/*  SELECT recipes.* (FROM recipes 
JOIN users_recipes ON recipe.id = users_recipes.recipe_id 
JOIN users ON users_recipes.user_id = users.id
WHERE users.id = $1)

//SELECT recipes.* FROM recipes JOIN 
users_recipes ON users_recipes.recipe_id = 
recipes.id JOIN users ON users_recipes.user_id = 
users.id WHERE users.id = 8


*/
module.exports = User;