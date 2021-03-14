import { MouseEventHandler } from "react";
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
} from "./styles";

const SingIn = () => {
  const { handleUserCall, handleGitUser, gitUser } = useGitHub();
  const { singIn } = useAuth();
  const { error } = useGitHub();

  const noRefresh: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleUserCall();
  };

  return (
    <Container>
      <GithubIcon />
      <UserDateForm onSubmit={() => singIn(gitUser)}>
        <Input
          className="errorTrue"
          type="text"
          placeholder={error.show ? error.message : `Digite usuário valido`}
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
