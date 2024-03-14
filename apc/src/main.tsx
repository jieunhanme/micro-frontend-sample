import React from "react";
import ReactDOM from "react-dom/client";
import "@src/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@src/routes";
React.lazy(() =>
  import("portal/i18n").catch(() =>
    console.log("i18n from portal is not ready.")
  )
);

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
