import React from "react";
import remoteApcRoutes from "apc/Routes";

const AppPage = React.lazy(() => import("./App"));

const Test = () => {
  return <div>HOST!!!</div>;
};
export const routes = [
  {
    path: "/",
    element: <AppPage />,
    children: [
      {
        path: "",
        element: <Test />,
      },
      ...remoteApcRoutes,
    ],
  },
];
