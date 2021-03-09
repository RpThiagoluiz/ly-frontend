//Styles
import { Container, GithubIcon, UserDate, RightArrowIcon } from "./styles";

const SingIn = () => (
  <Container>
    <GithubIcon />
    <UserDate>
      <input type="text" placeholder="Usuário" required />
      <button>
        Entrar
        <RightArrowIcon />
      </button>
    </UserDate>
  </Container>
);
export default SingIn;
