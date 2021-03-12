import styled, { keyframes } from "styled-components";

//Icons
import { Exit } from "@styled-icons/ionicons-outline/Exit";

const animate = keyframes`
0%{
  transform: translate(-100px);
  opacity:0;
}

50% {
  opacity:0.3;
}

100% {
  transform: translateY(0px);
  opacity:1;
}
`;

export const Container = styled.section`
  color: ${({ theme }) => theme.colors.text.white};
`;
export const Header = styled.section`
  height: 80px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px;

  background-color: ${({ theme }) => theme.colors.background.darkGray};

  > img {
    width: 150px;
    height: 150px;

    position: relative;
    top: 40px;

    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.details.white};
  }
`;
export const Content = styled.article``;

export const UserInfo = styled.section`
  display: flex;
  flex-direction: column;

  padding: 24px;

  > h2 {
    margin-bottom: 4px;
    font-size: 26px;
    text-transform: uppercase;
  }
  > span {
    margin-bottom: 2px;
    font-size: 18px;
  }
  &::before {
    content: "";

    width: 20px;
    height: 42px;

    position: absolute;
    left: -11px;

    border-radius: 7px;

    background-color: ${({ theme }) => theme.colors.buttons.yellow};
  }

  animation: ${animate}.3s ease-in;
`;

export const UserFollowInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px;

  background-color: #5252525d;

  > div {
    > h1 {
      font-size: 40px;
    }
    > span {
      font-size: 17px;
    }
  }
  animation: ${animate}.4s ease-in;
`;

export const UserBioInfo = styled.section`
  padding: 24px;
  > h2 {
    text-transform: uppercase;
    font-size: 26px;
  }
  > p {
    font-size: 18px;
  }
  &::before {
    content: "";

    width: 20px;
    height: 42px;

    position: absolute;
    left: -11px;

    border-radius: 7px;

    background-color: ${({ theme }) => theme.colors.buttons.yellow};
  }

  animation: ${animate}.5s ease-in;
`;

export const ExitIcon = styled(Exit)`
  width: 24px;
  height: 24px;

  margin-left: 12px;

  color: ${({ theme }) => theme.colors.buttons.red};

  cursor: pointer;
`;
