import React from "react";
import ReactDOM from "react-dom/client";
import "@src/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@src/routes";

const router = createBrowserRouter(routes, {
  basename: import.meta.env.MODE === "production" ? "apc" : "",
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
