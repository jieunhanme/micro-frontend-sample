import Root from "./components/layout";
// import { Route, Routes } from "react-router-dom";
// import ApcRoutes from "apc/Routes";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/*" element={<Root />}>
          <Route path="portal" element={<Test />} />
          {ApcRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes> */}
      <Root />
    </>
  );
}

export default App;
