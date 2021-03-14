//Styles
import { Container, Content, RightArrowIcon } from "./styles";

interface FollowingDataProps {
  following: {
    login: string;
    avatar_url: string;
    url: string;
  };
}

const Following = ({ following }: FollowingDataProps) => {
  return (
    <Container>
      <img src={following.avatar_url} alt="Avatar pessoal" />
      <Content>
        <p>#{following.login}</p>
        <RightArrowIcon />
      </Content>
    </Container>
  );
};

export default Following;
