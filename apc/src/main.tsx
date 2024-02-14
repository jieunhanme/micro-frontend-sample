import React from "react";
import ReactDOM from "react-dom/client";
import "@src/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@src/routes";
import "portal/i18n";

const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_APP_TITLE,
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
