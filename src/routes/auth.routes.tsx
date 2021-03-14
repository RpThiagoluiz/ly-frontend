import { Switch, Route } from "react-router-dom";

//Page
import SingIn from "../pages/SingIn";

const AuthRoutes = () => (
  <Switch>
    <Route path="/" component={SingIn} />
  </Switch>
);
export default AuthRoutes;
