import React from "react";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
