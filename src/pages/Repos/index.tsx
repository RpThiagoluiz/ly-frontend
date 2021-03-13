import { useHistory } from "react-router-dom";
//hook
import { useGitHub } from "../../hook/ApiCallContext";
//Components
import Repo from "../../components/Repo";
import NavBar from "../../components/NavBar";
//Styles
import { Container, Header, Content, LeftArrowIcon } from "./styles";

const Repos = () => {
  const { goBack } = useHistory();
  const { repositories, dataUser } = useGitHub();
  return (
    <Container>
      <Header>
        <LeftArrowIcon onClick={goBack} />
        <h2>{dataUser.public_repos} repositórios</h2>
      </Header>
      <Content>
        {repositories.map((repo) => (
          <Repo key={repo.name} repository={repo} />
        ))}
      </Content>
      <NavBar />
    </Container>
  );
};
export default Repos;
