import { Suspense, useMemo } from "react";
import { LaptopOutlined } from "@ant-design/icons";
import { useAtom } from "jotai";
import { Breadcrumb, Button, Layout, Menu, Spin, MenuProps } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import ErrorPage from "@src/@pages/Error";
import { localeAtom } from "@src/states/shareStates";

const { Header, Content } = Layout;

const nav: MenuProps["items"] = [
  {
    label: "APC",
    key: "APC",
    theme: "light",
    children: [
      {
        type: "group",
        label: "Menu 1",
        children: [
          {
            key: "Dashboard",
            label: <Link to="/apc">Dashboard</Link>,
          },
        ],
      },
      {
        type: "group",
        label: "Menu 2",
        children: [
          {
            key: "page1",
            label: <Link to="/apc/page1">page1</Link>,
          },
          {
            key: "page2",
            label: <Link to="/apc/page2">page2</Link>,
          },
          {
            key: "page3",
            label: <Link to="/apc/page3">page3</Link>,
          },
        ],
      },
    ],
  },
];

const App = () => {
  const { pathname } = useLocation();
  const [locale, setLocale] = useAtom(localeAtom);

  const pathList = useMemo(() => {
    const defaultPath = "Home";
    const paths = pathname.split("/").filter((ele) => ele);
    return [defaultPath, ...paths].map((key) => ({
      title: key,
    }));
  }, [pathname]);

  const onChange = () => {
    setLocale((locale) => (locale === "ko" ? "en" : "ko"));
  };

  return (
    <Layout className="h-screen">
      <Header className="flex items-center p-4 pt-0 pb-0">
        <Link to="/">
          <div className="flex gap-1 mr-5 font-bold text-gray-300">
            <LaptopOutlined />
            MFA SAMPLE
          </div>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          className="flex-1 min-w-0"
          items={nav}
        />
        <Button
          type="dashed"
          shape="circle"
          ghost
          className="text-gray-100"
          onClick={onChange}
        >
          {locale}
        </Button>
      </Header>
      <Layout>
        <Layout className="p-4 pt-0">
          <Breadcrumb className="m-3 ml-0 mr-0" items={pathList} />
          <Content className="p-4 bg-white rounded-md">
            <ErrorBoundary
              FallbackComponent={(props) => <ErrorPage type={500} {...props} />}
              onReset={() => window.location.reload()}
            >
              <Suspense fallback={<Spin fullscreen />}>
                <Outlet />
              </Suspense>
            </ErrorBoundary>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
