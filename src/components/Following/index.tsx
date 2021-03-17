import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useGitHubFollow } from "../../hook/FollowerFollowingContext";
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
  const { followData, dataFollow } = useGitHubFollow();

  const handleChangeUser: MouseEventHandler<HTMLButtonElement> = () => {
    followData(following.login);
    console.log(dataFollow);
  };

  return (
    <Container>
      <img src={following.avatar_url} alt="Avatar pessoal" />
      <Content>
        <p>#{following.login}</p>
        <button onClick={handleChangeUser} type="button">
          <Link to={`/seguidor/${following.login}`}>
            <RightArrowIcon />
          </Link>
        </button>
      </Content>
    </Container>
  );
};

export default Following;
