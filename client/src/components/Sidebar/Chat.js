import React from 'react';
import { Box } from '@material-ui/core';
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
  wrapperBadge: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    flex: 1,
  },
  badge: {
    display: 'inline-block',
    padding: '.5em 1em',
    borderRadius: '9999px',
    backgroundColor: '#3F92FF',
    color: 'white',
    fontWeight: 700,
    fontSize: '10px',
    lineHeight: '14px',
    letterSpacing: '-0.5px',
    textAlign: 'center',
    marginRight: '17px',
  },
}));

const Chat = ({ conversation, setActiveChat, user }) => {
  const classes = useStyles();
  const { otherUser } = conversation;

  const handleClick = async (conversation) => {
    await setActiveChat(conversation.id, conversation.otherUser.username);
  };

  const messagesHasNotRead = conversation.messages.filter(
    (message) => !message.hasRead && message.senderId !== user.id
  ).length;

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
      {messagesHasNotRead > 0 && (
        <div className={classes.wrapperBadge}>
          <span className={classes.badge}>{messagesHasNotRead}</span>
        </div>
      )}
    </Box>
  );
};

export default Chat;
