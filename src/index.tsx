import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//ContextApi
import { AuthProvider } from "./hook/auth";
import { GitHubProvider } from "./hook/ApiCallContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <GitHubProvider>
        <App />
      </GitHubProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
