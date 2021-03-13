import styled, { keyframes } from "styled-components";
import { useUser } from "../../hook/ApiCallContext";

//Icons
import { ArrowRight } from "@styled-icons/fa-solid/ArrowRight";
import { Github } from "@styled-icons/bootstrap/Github";

const animate = keyframes`
0%{
  transform: translateY(-100px);
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background.black};
`;

export const UserDateForm = styled.form`
  > input {
    width: 340px;

    margin: 48px 0;
    padding: 12px;

    border: 1px solid #e5e5e5;
    border-radius: 7px;
    box-shadow: 0 3px 6px #0000001d;

    font-size: 20px;
    color: ${({ theme }) => theme.colors.text.gray};
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 340px;

    font-weight: bold;
    font-size: 20px;
    padding: 12px;

    border: 1px solid #e5e5e5;
    border-radius: 7px;
    box-shadow: 0 3px 6px #0000001d;

    background-color: ${({ theme }) => theme.colors.buttons.yellow};
  }
`;

export const GithubIcon = styled(Github)`
  width: 128px;
  height: 128px;

  color: ${({ theme }) => theme.colors.buttons.yellow};

  margin-bottom: 24px;
  animation: ${animate} 1.5s ease-in;
`;

export const RightArrowIcon = styled(ArrowRight)`
  width: 18px;
  height: 18px;
  margin-left: 13px;
`;
