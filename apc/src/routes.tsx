import React from "react";

// NOTE 경로가 같으면 ERROR!!
const AppPage = React.lazy(() => import("./App"));
const Page1 = React.lazy(() => import("@pages/page1"));
const Page2 = React.lazy(() => import("@pages/page2"));
const Page3 = React.lazy(() => import("@pages/page3"));

const routes = [
  {
    path: "",
    element: <AppPage />,
  },
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
];

export default routes;
