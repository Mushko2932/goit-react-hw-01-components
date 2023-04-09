import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileContainer,
  UserDescription,
  UserAvatar,
  UserName,
  UserInfo,
  UserStats,
  UserStatsItem,
} from './Profile.styled';

export function Profile({ avatar, username, tag, location, stats }) {
  return (
    <ProfileContainer>
      <UserDescription>
        <UserAvatar src={avatar} alt={avatar}/>
        <UserName>{username}</UserName>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserDescription>

      <UserStats>
        <UserStatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </UserStatsItem>
      </UserStats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
   avatar: PropTypes.string.isRequired,
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
   }),
 };
