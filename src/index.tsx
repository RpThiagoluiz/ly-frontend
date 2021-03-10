import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//ContextApi
import { AuthProvider } from "./hook/auth";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
