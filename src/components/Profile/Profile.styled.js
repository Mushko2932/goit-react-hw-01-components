import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  width: min-content;

  background: linear-gradient(
    180deg,
    transparent 50%,
    rgba(142, 227, 212, 0.22) 50%
  );
  border-radius: 18px;
`;

export const UserDescription = styled.div`
    text-align: center;
    font-size: 24px;
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 50%;
  background: #d9d9d9;
  border: 6px solid #ffffff;
`;

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 700;
`;

export const UserInfo = styled.p`
    font-size: 20px;
`;

export const UserStats = styled.ul`
  padding: 20px;
  margin: 0;
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  list-style: none;
  font-size: 18px;
  background-color: rgb(187, 187, 199);
`;

export const UserStatsItem = styled.li`
  display: grid;
  width: 128px;
  justify-items: center;
  :not(:last-child) {
    border-right: 1px solid #999999;
  }
`;
