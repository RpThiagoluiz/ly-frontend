//Components
import NavBar from "../../components/NavBar";
import UserProfile from "../../components/UserProfile";

//hook
import { useGitHub } from "../../hook/ApiCallContext";

//Styles
import { Container, Spinner } from "./styles";

const Home = () => {
  const { dataUser, isLoading } = useGitHub();

  return (
    <Container>
      {isLoading ? <Spinner /> : <UserProfile user={dataUser} />}
      <NavBar />
    </Container>
  );
};
export default Home;
