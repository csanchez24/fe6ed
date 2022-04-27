const router = require("express").Router();
const { Message } = require("../../db/models");
const { Op } = require("sequelize");

router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { conversationId } = req.body;

    const messages = await Message.update(
      { hasRead: true, readAt: new Date() },
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
