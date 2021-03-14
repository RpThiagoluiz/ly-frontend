import { useHistory } from "react-router-dom";
import { useGitHub } from "../../hook/ApiCallContext";
//Components
import Follower from "../../components/Follower";
import NoFollower from "../../components/NoFollower";
import NavBar from "../../components/NavBar";
//Styles
import { Container, Header, Content, LeftArrowIcon } from "./styles";

const Followers = () => {
  const { goBack } = useHistory();
  const { followersUser, dataUser } = useGitHub();

  const successFollowers = () =>
    followersUser.map((follower) => (
      <Follower key={follower.login} follower={follower} />
    ));

  return (
    <Container>
      <Header>
        <LeftArrowIcon onClick={goBack} />
        <h2>{dataUser.followers} seguidores</h2>
      </Header>
      <Content>
        {followersUser.length > 0 ? successFollowers() : <NoFollower />}
      </Content>
      <NavBar />
    </Container>
  );
};
export default Followers;
