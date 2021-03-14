import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGitHub } from "../../hook/ApiCallContext";
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
  const { handleUserCall, handleGitUser, gitUser } = useGitHub();

  useEffect(() => {
    handleGitUser(following.login);
  }, [gitUser]);

  return (
    <Container>
      <img src={following.avatar_url} alt="Avatar pessoal" />
      <Content>
        <p>#{following.login}</p>
        <button onClick={handleUserCall}>
          <Link to="/home">
            <RightArrowIcon />
          </Link>
        </button>
      </Content>
    </Container>
  );
};

export default Following;
