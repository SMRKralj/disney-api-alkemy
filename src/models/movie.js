module.exports = (sequelize, type) => {
  return sequelize.define("movie", {
    image: {
      type: type.BLOB,
    },
    title: {
      type: type.STRING,
    },
    filmDate: {
      type: type.DATE,
    },
    score: {
      type: type.ENUM,
      values: ["1", "2", "3", "4", "5"],
    },
    characters: {
      type: type.TEXT,
    },
  });
};
