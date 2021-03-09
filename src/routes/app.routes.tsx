import { Switch, Route } from "react-router-dom";

//Pages
import SingIn from "../pages/SingIn";
import Home from "../pages/Home";
import Repos from "../pages/Repos";
import Followers from "../pages/Followers";
import Following from "../pages/Following";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/home" component={Home} />
    <Route path="/repositorios" component={Repos} />
    <Route path="/seguidores" component={Followers} />
    <Route path="/seguindo" component={Following} />
  </Switch>
);

export default AppRoutes;
