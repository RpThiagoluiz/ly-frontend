import { useGitHub } from "../../hook/ApiCallContext";
//Styles
import { Container, Content, RightArrowIcon } from "./styles";

interface FollowersDataProps {
  followers: {
    login: string;
    avatar_url: string;
    url: string;
  };
}

const Follower = ({ followers }: FollowersDataProps) => {
  const { handleGitUser, handleUserCall } = useGitHub(); //Login witch this follwer

  return (
    <Container>
      <img src={followers.avatar_url} alt="Avatar pessoal" />
      <Content>
        <p>#{followers.login}</p>
        <RightArrowIcon />
      </Content>
    </Container>
  );
};

export default Follower;
