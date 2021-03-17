import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useGitHubFollow } from "../../hook/FollowerFollowingContext";
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
  const { followData } = useGitHubFollow();

  const handleChangeUser: MouseEventHandler<HTMLButtonElement> = () => {
    followData(follower.login);
  };

  return (
    <Container>
      <img src={follower.avatar_url} alt="Avatar pessoal" />
      <Content>
        <p>#{follower.login}</p>
        <button onClick={handleChangeUser}>
          <Link to={`/seguidor/${follower.login}`}>
            <RightArrowIcon />
          </Link>
        </button>
      </Content>
    </Container>
  );
};

export default Follower;
