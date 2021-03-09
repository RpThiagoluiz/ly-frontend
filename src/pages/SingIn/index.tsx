import { Container, UserDate } from "./styles";
//Icons
import githubIcon from "../../assets/icons/github.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

const SingIn = () => (
  <Container>
    <img src={githubIcon} alt="github Icon" />
    <UserDate>
      <input type="text" placeholder="Usuário" required />
      <button>
        Entrar
        <img src={rightArrow} alt="Icon" />
      </button>
    </UserDate>
  </Container>
);
export default SingIn;
