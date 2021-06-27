const Sequelize = require("sequelize");

const movieModel = require("../src/models/movie");
const characterModel = require("../src/models/character");
const genderModel = require("../src/models/gender");
const userModel = require("../src/models/users");

const sequelize = new Sequelize("7bAPaJj8Dk", "7bAPaJj8Dk", "cB3xNOmFY2", {
  host: "remotemysql.com",
  dialect: "mysql",
});

const Movie = movieModel(sequelize, Sequelize);
const Character = characterModel(sequelize, Sequelize);
const Gender = genderModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log("Synchronized tables");
});

module.exports = {
  Movie,
  Gender,
  Character,
  User,
};
