import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.gray};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  position: absolute;
  left: 42vw;
  top: 25vh;

  animation: ${rotate360} 2s linear infinite;
  transform: translateZ(0);

  border-top: 5px solid ${({ theme }) => theme.colors.details.white};
  border-right: 5px solid ${({ theme }) => theme.colors.details.white};
  border-bottom: 5px solid ${({ theme }) => theme.colors.details.white};
  background: transparent;
  width: 256px;
  height: 256px;
  border-radius: 50%;
`;
