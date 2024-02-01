import React from "react";
import remoteApcRoutes from "apc/Routes";

const AppPage = React.lazy(() => import("./App"));

export const routes = [
  {
    path: "/",
    element: <AppPage />,
    children: [
      {
        path: "apc",
        children: [...remoteApcRoutes],
      },
    ],
  },
];
