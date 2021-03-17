import styled, { keyframes } from "styled-components";

//Icons
import { ArrowRight } from "@styled-icons/fa-solid/ArrowRight";

const animate = keyframes`
0%{
  transform: translateY(-200px);
  opacity:0;
}
25% {
  opacity:0.2;
}

50% {
  opacity:0.5;
}
75% {
  opacity:0.8;
}

100% {
  transform: translateY(0px);
  opacity:1;
}
`;

export const Container = styled.section`
  width: 100%;
  height: 120px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: right;

  border-bottom: 1px solid ${({ theme }) => theme.colors.details.grayTeriary};
  animation: ${animate} 1.3s ease-in;
  transition: all 0.2s;
  > img {
    width: 64px;
    height: 64px;

    margin: 0 36px 0 24px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.details.white};
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

  &:hover {
    filter: brightness(1.3);

    > img {
      box-shadow: 2px 3px 2px 2px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;

  > p {
    font-size: 16px;
  }
  > button {
    background: transparent;
  }
`;

export const RightArrowIcon = styled(ArrowRight)`
  width: 24px;
  height: 24px;

  margin-right: 15px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.details.white};
`;
