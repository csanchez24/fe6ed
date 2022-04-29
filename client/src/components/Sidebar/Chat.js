import React from 'react';
import { Box, Badge } from '@material-ui/core';
import { BadgeAvatar, ChatContent } from '../Sidebar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'grab',
    },
  },
  badge: {
    marginRight: '17px',
  },
}));

const Chat = ({ conversation, setActiveChat, user }) => {
  const classes = useStyles();
  const { otherUser } = conversation;

  const handleClick = async (conversation) => {
    await setActiveChat(conversation.id, conversation.otherUser.username);
  };

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
      {conversation.newMessagesCount > 0 && (
        <Badge
          badgeContent={conversation.newMessagesCount}
          color="primary"
          classes={{ root: `${classes.badge}` }}
        />
      )}
    </Box>
  );
};

export default Chat;
