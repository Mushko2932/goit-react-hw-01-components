import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
    padding: 0;
    background-color: #ffffff;
`;

export const UserDescription = styled.div`
    text-align: center;
    font-size: 24px;
`;

export const UserAvatar = styled.img`
    width: 100%;
    height: 240px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
`
