import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//ContextApi
import { AuthProvider } from "./hook/auth";
import { GitHubProvider } from "./hook/ApiCallContext";
import { GitHubFollowProvider } from "./hook/FollowerFollowingContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <GitHubProvider>
        <GitHubFollowProvider>
          <App />
        </GitHubFollowProvider>
      </GitHubProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
