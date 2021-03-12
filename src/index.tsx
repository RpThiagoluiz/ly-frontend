import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//ContextApi
import { AuthProvider } from "./hook/auth";
import { UserProvider } from "./hook/ApiCallContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
