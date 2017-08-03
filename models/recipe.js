const db = require('../db/config');

const Recipe = {};

Recipe.findById = (healthlabels) => {
    return db.oneOrNone(`
    SELECT *
    FROM recipes
    WHERE id = $1
    `, [healthlabels]);
};