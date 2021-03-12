//Styles
import { Container, Content, RightArrowIcon } from "./styles";

interface FollowersDataProps {
  followers: {
    login: string;
    avatar_url: string;
    url: string;
  };
}

const Follower = ({ followers }: FollowersDataProps) => (
  <Container>
    <img src={followers.avatar_url} alt="Avatar pessoal" />
    <Content>
      <p>#{followers.login}</p>
      <RightArrowIcon />
    </Content>
  </Container>
);

export default Follower;
