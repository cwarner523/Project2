const db = require('../db/config');

const Recipe = {};

Recipe.findAll= ()=>{
    return db.query(`SELECT healthlabels FROM recipes`);
};

Recipe.findById = (healthlabels) => {
    return db.query(`
    SELECT *
    FROM recipes
    WHERE healthlabels = $1
    `, [healthlabels]);
};

Recipe.findRecipe = (id) => {
    return db.oneOrNone(`
    SELECT *
    FROM recipes
    WHERE id = $1
    `, [id]);
};


Recipe.create = (recipe) => {
    return db.one(`
    INSERT INTO recipes
    (title, servingsize, healthlabels, ingredients, calories, url, image)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `, [recipe.title, recipe.servingsize, recipe.healthlabels, recipe.ingredients, recipe.calories, recipe.url, recipe.image,]);
};

module.exports = Recipe;