// import App from "./App";

import React from "react";

// import AppPage from "./App";
// import Page1 from "./components/pages/page1";
// import Page2 from "./components/pages/page2";
// import Page3 from "./components/pages/page3";

const AppPage = React.lazy(() => import("./App"));
const Page1 = React.lazy(() => import("./components/pages/page1"));
const Page2 = React.lazy(() => import("./components/pages/page2"));
const Page3 = React.lazy(() => import("./components/pages/page3"));

const routes = [
  {
    path: "/apc",
    element: <AppPage />,
    children: [
      {
        path: "page1",
        element: <Page1 />,
      },
      {
        path: "page2",
        element: <Page2 />,
      },
      {
        path: "page3",
        element: <Page3 />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <AppPage />,
  // },
  // {
  //   path: "apc/page1",
  //   element: <Page1 />,
  // },
  // {
  //   path: "apc/page2",
  //   element: <Page2 />,
  // },
  // {
  //   path: "apc/page3",
  //   element: <Page3 />,
  // },
];

export default routes;
