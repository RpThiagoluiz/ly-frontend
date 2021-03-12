import { useState, useEffect } from "react";
//hook
import { useAuth } from "../../hook/auth";
import { useUser } from "../../hook/ApiCallContext";

//Styles
import { Container, GithubIcon, UserDateForm, RightArrowIcon } from "./styles";

interface userData {
  id: number;
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  public_repos: string;
  public_gists: string;
  followers: string;
  following: string;
  repos_url: string;
}

const SingIn = () => {
  const [gitName, setGitname] = useState("RpThiagoluiz");
  const [dataGitUser, setDataGitUser] = useState<userData[]>([]);

  const { singIn } = useAuth();
  const { handleUserCall } = useUser();

  useEffect(() => {
    handleUserCall();
  }, []);

  return (
    <Container>
      <GithubIcon />
      <UserDateForm onSubmit={() => singIn(gitName)}>
        <input
          type="text"
          placeholder="Usuário"
          value={gitName}
          onChange={(e) => setGitname(e.target.value)}
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
