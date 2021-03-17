import { Switch, Route, useParams } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Repos from "../pages/Repos";
import Followers from "../pages/Followers";
import Followings from "../pages/Followings";
import FollowInfoDetail from "../pages/FollowerInfoDetail";
import FollowingInfoDetail from "../pages/FollowingInfoDetail";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/repositorios" component={Repos} />
      <Route path="/seguidores" component={Followers} />
      <Route path="/seguidor:login" component={FollowInfoDetail} />
      <Route path="/seguindo" component={Followings} />
      <Route path="/seguindo:login" component={FollowingInfoDetail} />
    </Switch>
  );
};

export default AppRoutes;
