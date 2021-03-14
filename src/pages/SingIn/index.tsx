import { MouseEventHandler, useEffect } from "react";
//hook
import { useAuth } from "../../hook/auth";
import { useGitHub } from "../../hook/ApiCallContext";

//Styles
import {
  Container,
  GithubIcon,
  UserDateForm,
  Input,
  RightArrowIcon,
  ErrorContainer,
  ErrorImage,
} from "./styles";

const SingIn = () => {
  const { handleUserCall, handleGitUser, gitUser, error } = useGitHub();
  const { singIn } = useAuth();

  useEffect(() => {}, [gitUser, handleUserCall]);

  //NoRefresh, for checks
  const noRefresh: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleUserCall();
  };

  return (
    <Container>
      <GithubIcon />
      <UserDateForm onSubmit={() => singIn(gitUser)}>
        {error.show && (
          <ErrorContainer>
            <ErrorImage />
            <p>{error.message}</p>
          </ErrorContainer>
        )}
        <Input
          className="errorTrue"
          type="text"
          placeholder={`Digite usuário valido`}
          value={gitUser}
          onChange={(e) => handleGitUser(e.target.value)}
        />{" "}
        <button onClick={noRefresh} type="submit">
          Entrar
          <RightArrowIcon />
        </button>
      </UserDateForm>
    </Container>
  );
};
export default SingIn;
