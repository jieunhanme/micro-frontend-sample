import React from "react";
import ReactDOM from "react-dom/client";
import "@src/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";
import routes from "@src/routes";
React.lazy(() =>
  import("portal/i18n").catch(() =>
    console.log("i18n from portal is not ready.")
  )
);

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JotaiProvider>
      <RouterProvider router={router} />
    </JotaiProvider>
  </React.StrictMode>
);
