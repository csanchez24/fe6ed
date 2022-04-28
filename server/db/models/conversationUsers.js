const Sequelize = require("sequelize");
const db = require("../db");

const ConversationUsers = db.define("conversationUsers", {
  conversationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "conversations",
      key: "id",
    },
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = ConversationUsers;
