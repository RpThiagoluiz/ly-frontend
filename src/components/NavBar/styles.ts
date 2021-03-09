import styled from "styled-components";

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
    color: black;
    opacity: 0.5;

    > img {
      width: 26px;
      height: 26px;
    }
  }
  .navlink-active {
    opacity: 1;
  }
`;
