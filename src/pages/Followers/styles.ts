import styled from "styled-components";

//Icons
import { ArrowLeft } from "@styled-icons/fa-solid/ArrowLeft";

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background.darkGray};

  //Scroll
`;

export const Header = styled.section`
  height: 68px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.background.black};

  > img {
    width: 19px;
    height: 19px;

    position: absolute;
    left: 18px;

    background-color: white;
  }
`;

export const Content = styled.section`
  max-height: calc(100vh - 68px);
  width: 100%;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.details.white};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.details.grayQuaternary};
  }
`;

export const LeftArrowIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  position: absolute;
  left: 18px;

  color: white;

  cursor: pointer;
`;
