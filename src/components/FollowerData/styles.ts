import styled, { keyframes } from "styled-components";

//Icons
import { Save } from "@styled-icons/bootstrap/Save";

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

  @media (max-width: 590px) {
    > img {
      width: 120px;
      height: 120px;
    }
  }
  @media (max-width: 425px) {
    > img {
      width: 96px;
      height: 96px;
    }
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

  @media (max-width: 840px) {
    > h2 {
      font-size: 18px;
    }
    > span {
      font-size: 14px;
    }
  }
  @media (max-width: 590px) {
    > h2 {
      font-size: 16px;
    }
    > span {
      font-size: 12px;
    }
  }
  @media (max-width: 425px) {
    width: 250px;
    > h2 {
      font-size: 16px;
      word-wrap: break-word;
    }
  }
  @media (max-width: 285px) {
    width: 180px;
    > h2 {
      font-size: 14px;
      word-wrap: break-word;
    }
  }
`;

export const UserFollowInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px;

  background-color: #5252525d;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
      font-size: 40px;
    }
    > span {
      font-size: 17px;
    }
  }
  animation: ${animate}.4s ease-in;

  @media (max-width: 840px) {
    > div {
      > h1 {
        font-size: 32px;
      }
      > span {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 590px) {
    > div {
      > h1 {
        font-size: 24px;
      }
      > span {
        font-size: 14px;
      }
    }
  }
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

  @media (max-width: 840px) {
    > h2 {
      font-size: 18px;
    }
    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 590px) {
    > h2 {
      font-size: 16px;
    }
    > p {
      font-size: 12px;
    }
  }
`;

export const SaveIcon = styled(Save)`
  width: 24px;
  height: 24px;

  margin-left: 12px;
  transform: rotate(90deg);

  color: ${({ theme }) => theme.colors.buttons.green};

  cursor: pointer;
`;
