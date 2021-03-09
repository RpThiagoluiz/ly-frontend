//Styles
import { Container, Content, RightArrowIcon } from "./styles";

interface FollowerProps {
  name: string;
  avatar: string;
}

const Follower = () => (
  <Container>
    <img src="https://github.com/RpThiagoluiz.png" alt="Avatar pessoal" />
    <Content>
      <p>#Thiago Luiz</p>
      <RightArrowIcon />
    </Content>
  </Container>
);
export default Follower;
