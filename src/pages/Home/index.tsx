//Components
import NavBar from "../../components/NavBar";
import UserProfile from "../../components/UserProfile";

//hook
import { useUser } from "../../hook/ApiCallContext";

//Styles
import { Container } from "./styles";

const Home = () => {
  const { dataUser } = useUser();
  return (
    <Container>
      <UserProfile user={dataUser} />
      <NavBar />
    </Container>
  );
};
export default Home;
