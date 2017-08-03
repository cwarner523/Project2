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

module.exports = Recipe;