import styled from "styled-components";

//Icons
import { Home } from "@styled-icons/boxicons-regular/Home";
import { Github } from "@styled-icons/feather/Github";
import { PeopleOutline } from "@styled-icons/evaicons-outline/PeopleOutline";

export const Container = styled.nav`
  width: 100%;
  height: 80px;

  position: absolute;
  bottom: 0;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.details.white};

  padding: 15px;

  border-radius: 15px 15px 0 0;
  box-shadow: 0 -3px 6px ${({ theme }) => theme.colors.details.grayQuaternary};

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 15px;
    text-decoration: none;
    //Active
    color: ${({ theme }) => theme.colors.details.grayPrimary};
  }
  .navlink-active {
    color: ${({ theme }) => theme.colors.background.black};
  }
`;

export const HomeIcon = styled(Home)`
  width: 26px;
  height: 26px;
`;
export const GithubIcon = styled(Github)`
  width: 26px;
  height: 26px;
`;
export const FollowIcon = styled(PeopleOutline)`
  width: 26px;
  height: 26px;
`;
