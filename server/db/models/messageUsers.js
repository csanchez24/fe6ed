const Sequelize = require("sequelize");
const db = require("../db");

const MessageUsers = db.define("messageUsers", {
  messageId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "messages",
      key: "id",
    },
  },
  conversationUserId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "conversationUsers",
      key: "id",
    },
  },
  hasRead: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  readAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = MessageUsers;
