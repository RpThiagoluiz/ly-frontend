import { useEffect } from "react";
//hook
import { useAuth } from "../../hook/auth";
import { useGitHub } from "../../hook/ApiCallContext";

//Styles
import { Container, GithubIcon, UserDateForm, RightArrowIcon } from "./styles";

const SingIn = () => {
  const { handleUserCall, handleGitUser, gitUser } = useGitHub();
  const { singIn } = useAuth();

  return (
    <Container>
      <GithubIcon />
      <UserDateForm onSubmit={() => singIn(gitUser)}>
        <input
          type="text"
          placeholder={`Digite usuário valido`}
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
