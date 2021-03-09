import { useHistory } from "react-router-dom";
//Components
import Repo from "../../components/Repo";
import NavBar from "../../components/NavBar";
//Styles
import { Container, Header, Content, LeftArrowIcon } from "./styles";

const Repos = () => {
  const { goBack } = useHistory();
  return (
    <Container>
      <Header>
        <LeftArrowIcon onClick={goBack} />
        <h2>10 repositórios</h2>
      </Header>
      <Content>
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </Content>
      <NavBar />
    </Container>
  );
};
export default Repos;
