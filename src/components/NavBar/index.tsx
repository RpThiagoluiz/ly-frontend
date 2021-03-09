import { NavLink } from "react-router-dom";

//Styles
import { Container, HomeIcon, GithubIcon, FollowIcon } from "./styles";

const NavBar = () => (
  <Container>
    <NavLink to="/home" activeClassName="navlink-active">
      <HomeIcon />
      Home
    </NavLink>
    <NavLink to="/repositorios" activeClassName="navlink-active">
      <GithubIcon />
      Repos
    </NavLink>
    <NavLink to="/seguidores" activeClassName="navlink-active">
      <FollowIcon />
      Seguidores
    </NavLink>
    <NavLink to="/seguindo" activeClassName="navlink-active">
      <FollowIcon />
      Seguindo
    </NavLink>
  </Container>
);
export default NavBar;
