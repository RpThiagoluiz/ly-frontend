import { useHistory } from "react-router-dom";
import { useUser } from "../../hook/ApiCallContext";
//Components
import Follower from "../../components/Follower";
import NavBar from "../../components/NavBar";
//Styles
import { Container, Header, Content, LeftArrowIcon } from "./styles";

const Following = () => {
  const { goBack } = useHistory();
  const { followersUser, dataUser } = useUser();

  const successFollowers = () =>
    followersUser.map((follower) => (
      <Follower key={follower.login} followers={follower} />
    ));

  return (
    <Container>
      <Header>
        <LeftArrowIcon onClick={goBack} />
        <h2>{dataUser.followers} seguidores</h2>
      </Header>
      <Content>
        {followersUser.length > 0 ? (
          successFollowers()
        ) : (
          <h1>Following no One</h1>
        )}
      </Content>
      <NavBar />
    </Container>
  );
};
export default Following;
