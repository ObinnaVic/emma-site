import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Context } from "./components/Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <HashRouter hashType="slash">
        <App />
      </HashRouter>
    </Context>
  </React.StrictMode>
);
