import { NavLink } from "react-router-dom";

//Styles
import { Container } from "./styles";
//Icons
import homeIcon from "../../assets/icons/home.svg";
import githubRepoIcon from "../../assets/icons/githubRepo.svg";
import followIcon from "../../assets/icons/follow.svg";

const NavBar = () => (
  <Container>
    <NavLink to="/home" activeClassName="navlink-active">
      <img src={homeIcon} alt="home" />
      Home
    </NavLink>
    <NavLink to="/repositorios" activeClassName="navlink-active">
      <img src={githubRepoIcon} alt="Repo" />
      Repos
    </NavLink>
    <NavLink to="/seguidores" activeClassName="navlink-active">
      <img src={followIcon} alt="seguidores" />
      Seguidores
    </NavLink>
    <NavLink to="/seguindo" activeClassName="navlink-active">
      <img src={followIcon} alt="seguindo" />
      Seguindo
    </NavLink>
  </Container>
);
export default NavBar;
