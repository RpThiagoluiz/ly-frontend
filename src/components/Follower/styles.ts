import styled from "styled-components";

//Icons
import { ArrowRight } from "@styled-icons/fa-solid/ArrowRight";

export const Container = styled.section`
  width: 100%;
  height: 120px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: right;

  border-bottom: 1px solid ${({ theme }) => theme.colors.details.grayTeriary};

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
`;

export const RightArrowIcon = styled(ArrowRight)`
  width: 24px;
  height: 24px;

  margin-right: 15px;
  cursor: pointer;
`;