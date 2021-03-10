import axios from "axios";
import { useState, MouseEvent } from "react";
//Styles
import { Container, GithubIcon, UserDate, RightArrowIcon } from "./styles";

const SingIn = () => {
  const [gitName, setGitname] = useState("");

  const handleGitname = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(gitName);
    axios
      .get(`https://api.github.com/users/${gitName}`)
      .then((response) => console.log(response.data));
  };

  return (
    <Container>
      <GithubIcon />
      <UserDate>
        <input
          type="text"
          placeholder="Usuário"
          required
          value={gitName}
          onChange={(e) => setGitname(e.target.value)}
        />
        <button onClick={handleGitname}>
          Entrar
          <RightArrowIcon />
        </button>
      </UserDate>
    </Container>
  );
};
export default SingIn;
