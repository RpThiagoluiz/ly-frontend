import styled from "styled-components";

//Icons
import { Star } from "@styled-icons/boxicons-regular/Star";
import { Lock } from "@styled-icons/bootstrap/Lock";
import { Unlock } from "@styled-icons/bootstrap/Unlock";

export const Container = styled.section`
  width: 100%;
  min-height: 152px;

  position: relative;
  padding: 18px;

  margin-bottom: 80px; //NavBar Height

  border-bottom: 1px solid ${({ theme }) => theme.colors.details.grayTeriary};

  &::before {
    content: "";

    width: 20px;
    height: 42px;

    position: absolute;
    left: -11px;

    border-radius: 7px;

    background-color: ${({ theme }) => theme.colors.buttons.yellow};
  }

  overflow-x: hidden;
`;

export const Content = styled.section`
  color: ${({ theme }) => theme.colors.text.white};

  > h2 {
    font-size: 20px;

    margin-bottom: 15px;
  }

  > p {
    font-size: 15px;
    margin-bottom: 15px;
  }
`;

export const DetailsContent = styled.section`
  width: 100%;

  position: absolute;
  bottom: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-right: 36px;

    > span {
      margin: 2px 0 0 7px;
      color: ${({ theme }) => theme.colors.text.white};
    }
  }
`;

export const StarIcon = styled(Star)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.buttons.yellow};
`;

export const LockIcon = styled(Lock)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.buttons.green};
`;
export const UnlockIcon = styled(Unlock)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.buttons.red};
`;
