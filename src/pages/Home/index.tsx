//Components
import NavBar from "../../components/NavBar";
import UserProfile from "../../components/UserProfile";

//Styles
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <UserProfile />
      <NavBar />
    </Container>
  );
};
export default Home;
