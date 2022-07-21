const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Pokemon = sequelize.define("pokemon", {
    pokemon_id: {
      type: Sequelize.BIGINT,
    },
    nickname: {
      type: Sequelize.STRING,
    },
  });
  return Pokemon;
};