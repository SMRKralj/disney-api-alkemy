module.exports = (sequelize, type) => {
  return sequelize.define("user", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    userName: type.STRING,
    email: type.STRING,
    password: type.STRING(150),
  });
};
