import styled, { keyframes } from "styled-components";

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

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.gray};

  animation: ${animate} 0.5s ease-in;
`;
