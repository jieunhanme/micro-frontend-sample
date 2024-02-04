import React from "react";
import remoteApcRoutes from "apc/Routes";
import ErrorPage from "@pages/error";

const AppPage = React.lazy(() => import("./App"));

export const routes = [
  {
    path: "/",
    element: <AppPage />,
    errorElement: <ErrorPage type={404} />,
    children: [
      {
        path: "*",
        element: <ErrorPage type={404} />,
      },
      {
        path: "apc",
        children: [...remoteApcRoutes],
      },
    ],
  },
];
