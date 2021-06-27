
module.exports = (sequelize, type) => {
  return sequelize.define("character", {
    image: {
      type: type.BLOB,
    },
    name: {
      type: type.STRING,
    },
    age: {
      type: type.INTEGER,
    },
    weight: {
      type: type.FLOAT,
    },
    story: {
      type: type.TEXT,
    },
    movies: {
      type: type.TEXT,
    },
  });
};
