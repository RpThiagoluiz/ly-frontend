//Components
import NavBar from "../../components/NavBar";
import FollowerData from "../../components/FollowerData";

//hook
import { useGitHubFollow } from "../../hook/FollowerFollowingContext";

//Styles
import { Container, Spinner } from "./styles";

const FollowInfoDetail = () => {
  const { dataFollow, isLoading } = useGitHubFollow();

  return (
    <Container>
      {isLoading ? <Spinner /> : <FollowerData followerInfos={dataFollow} />}
      <NavBar />
    </Container>
  );
};
export default FollowInfoDetail;
