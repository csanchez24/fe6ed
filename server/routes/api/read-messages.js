const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const { Op } = require("sequelize");

router.patch("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const { conversationId } = req.body;
    const senderId = req.user.id;

    const conversation = await Conversation.findByPk(conversationId);
    if (!conversation) return res.sendStatus(404);
    if (conversation.user1Id !== senderId && conversation.user2Id !== senderId)
      return res.sendStatus(403);

    const messages = await Message.update(
      { hasRead: true },
      {
        where: {
          conversationId,
          senderId: { [Op.ne]: senderId },
          hasRead: false,
        },
      }
    );
    return res.json({ messages });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
