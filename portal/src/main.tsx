import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { routes } from "./routes.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
