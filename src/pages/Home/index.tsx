//Components
import NavBar from "../../components/NavBar";
import UserProfile from "../../components/UserProfile";

//hook
import { useGitHub } from "../../hook/ApiCallContext";

//Styles
import { Container } from "./styles";

const Home = () => {
  const { dataUser } = useGitHub();
  return (
    <Container>
      <UserProfile user={dataUser} />
      <NavBar />
    </Container>
  );
};
export default Home;
