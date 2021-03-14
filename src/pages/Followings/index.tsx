import { useHistory } from "react-router-dom";
import { useGitHub } from "../../hook/ApiCallContext";
//Components
import Following from "../../components/Following";
import NavBar from "../../components/NavBar";
//Styles
import { Container, Header, Content, LeftArrowIcon } from "./styles";

const Followings = () => {
  const { goBack } = useHistory();
  const { followingUser, dataUser } = useGitHub();

  return (
    <Container>
      <Header>
        <LeftArrowIcon onClick={goBack} />
        <h2>{dataUser.following} seguindo</h2>
      </Header>
      <Content>
        {followingUser.map((following) => (
          <Following key={following.login} following={following} />
        ))}
      </Content>
      <NavBar />
    </Container>
  );
};
export default Followings;
