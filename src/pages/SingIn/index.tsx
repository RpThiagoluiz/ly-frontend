import { useState, useEffect, ChangeEvent } from "react";
//hook
import { useAuth } from "../../hook/auth";
import { useUser } from "../../hook/ApiCallContext";

//Styles
import { Container, GithubIcon, UserDateForm, RightArrowIcon } from "./styles";

const SingIn = () => {
  const { handleUserCall, handleGitUser, gitUser } = useUser();
  const { singIn } = useAuth();

  useEffect(() => {
    handleUserCall();
    handleGitUser(gitUser);
  }, []);

  return (
    <Container>
      <GithubIcon />
      <UserDateForm onSubmit={() => singIn(gitUser)}>
        <input
          type="text"
          placeholder="Digite usuário valido"
          value={gitUser}
          onChange={(e) => handleGitUser(e.target.value)}
        />
        <button onClick={handleUserCall} type="submit">
          Entrar
          <RightArrowIcon />
        </button>
      </UserDateForm>
    </Container>
  );
};
export default SingIn;
