module.exports = (sequelize, type) => {
  return sequelize.define("gender", {
    image: {
      type: type.BLOB,
    },
    movies: {
      type: type.TEXT,
    },
  });
};
