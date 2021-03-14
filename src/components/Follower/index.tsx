import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGitHub } from "../../hook/ApiCallContext";
//Styles
import { Container, Content, RightArrowIcon } from "./styles";

interface FollowerDataProps {
  follower: {
    login: string;
    avatar_url: string;
    url: string;
  };
}

const Follower = ({ follower }: FollowerDataProps) => {
  const { handleUserCall, handleGitUser, gitUser } = useGitHub();

  useEffect(() => {
    handleGitUser(follower.login);
  }, [gitUser, handleGitUser, follower.login]);

  return (
    <Container>
      <img src={follower.avatar_url} alt="Avatar pessoal" />
      <Content>
        <p>#{follower.login}</p>
        <button onClick={handleUserCall}>
          <Link to="/home">
            <RightArrowIcon />
          </Link>
        </button>
      </Content>
    </Container>
  );
};

export default Follower;
