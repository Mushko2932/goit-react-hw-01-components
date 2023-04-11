import styled from "@emotion/styled";

export const FriendListContainer = styled.ul`
  margin: 10px;
  padding: 20px;
`;

export const FriendListItem = styled.li`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  padding-right: 100px;

  box-shadow: 0 0 20px #3d3d3d;
  background-color: #fff;
  border-radius: 5px;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 50px;
    background-color: ${props => (
      !props.isOnline ? 'red' : 'green'
    )};
  }
`;

export const FriendStatus = styled.span`
  background-color: red;
`;

export const FriendAvatar = styled.img`
  width: 48px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;