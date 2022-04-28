const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("message", {
  conversationUserId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "conversationUsers",
      key: "id",
    },
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Message;
