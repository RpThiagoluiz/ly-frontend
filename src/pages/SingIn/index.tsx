import { Container, UserDate, RightArrowIcon } from "./styles";
//Icons
import githubIcon from "../../assets/icons/github.svg";

const SingIn = () => (
  <Container>
    <img src={githubIcon} alt="github Icon" />
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
