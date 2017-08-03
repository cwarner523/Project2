
/*
require('isomorphic-fetch');
require('dotenv').config();

function getRecipes (req, res, next) {
    fetch(`https://api.edamam.com/search?q=${req.params.cat}&appid=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
        console.log(jsonRes);
          res.locals.hits = jsonRes.title;
          console.log(res.locals.hits);
        return next();
    }).catch(err => {
        console.log(err);
        return next();
    })
}

module.exports = {
    getRecipes,
}
*/