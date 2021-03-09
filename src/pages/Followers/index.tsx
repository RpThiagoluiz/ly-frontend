import { useHistory } from "react-router-dom";
//Components
import Follower from "../../components/Follower";
import NavBar from "../../components/NavBar";
//Styles
import { Container, Header, Content, LeftArrowIcon } from "./styles";

const Followers = () => {
  const { goBack } = useHistory();
  return (
    <Container>
      <Header>
        <LeftArrowIcon onClick={goBack} />
        <h2>10 seguidores</h2>
      </Header>
      <Content>
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
      </Content>
      <NavBar />
    </Container>
  );
};
export default Followers;
