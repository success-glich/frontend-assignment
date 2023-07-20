import React from "react";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
