

CREATE TABLE IF NOT EXISTS users 
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    email VARCHAR(255),
    firstname VARCHAR(255),
    lastname VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS recipes (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  servingsize INTEGER,
  healthlabels VARCHAR(255),
  ingredients VARCHAR(1024),
  calories INTEGER,
  url VARCHAR(1024),
  image VARCHAR(1024)
);

CREATE TABLE IF NOT EXISTS users_recipes
(
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    recipe_id INTEGER REFERENCES recipes(id),
    comments VARCHAR(1024)
);