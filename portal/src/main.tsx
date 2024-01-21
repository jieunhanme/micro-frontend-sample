import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routes } from "./routes.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const mergedRoutes = [...routes];

const router = createBrowserRouter(mergedRoutes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
