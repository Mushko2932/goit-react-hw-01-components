import React from "react";
import PropTypes from 'prop-types';
import {
  FriendListContainer,
  FriendListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export function FriendList({ friends}) {
  return (
    <FriendListContainer>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id}>
            <FriendStatus>{friend.isOnline}</FriendStatus>
            <FriendAvatar
              src={friend.avatar}
              alt={friend.avatar}
            />
            <FriendName>{friend.name}</FriendName>
          </FriendListItem>
        );
      })}
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};