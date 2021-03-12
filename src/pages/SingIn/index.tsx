import axios from "axios";
import { useState, MouseEvent } from "react";
//hook
import { useAuth } from "../../hook/auth";

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
  const [gitName, setGitname] = useState("");
  const [dataGitUser, setDataGitUser] = useState<userData[]>([]);

  const { singIn } = useAuth();

  const handleGitname = () => {
    axios
      .get(`https://api.github.com/users/${gitName}`)
      .then((response) => setDataGitUser(response.data));

    console.log(dataGitUser);
  };

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
        <button onClick={handleGitname} type="submit">
          Entrar
          <RightArrowIcon />
        </button>
      </UserDateForm>
    </Container>
  );
};
export default SingIn;
