import { BrowserRouter } from "react-router-dom";
//Custom Auth
import { useAuth } from "../hook/auth";

//Routes
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { logged } = useAuth();
  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
export default Routes;
