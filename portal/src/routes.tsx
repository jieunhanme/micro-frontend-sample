import React from "react";
import ErrorPage from "@src/@pages/error";

const remoteUnconnected = [
  {
    path: "",
    element: <ErrorPage type="SERVICE" />,
  },
  {
    path: "*",
    element: <ErrorPage type="SERVICE" />,
  },
];

const AppPage = React.lazy(() => import("@src/App"));
const remoteApcRoutes = await import("apc/Routes").then(
  (module) => module.default,
  () => remoteUnconnected
);

export const routes = [
  {
    path: "/",
    element: <AppPage />,
    children: [
      {
        path: "*",
        errorElement: <ErrorPage type={404} />,
      },
      {
        path: "apc",
        children: [...remoteApcRoutes],
      },
    ],
  },
];
