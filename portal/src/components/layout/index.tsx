import React, { Suspense } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;
const RemoteApc = React.lazy(() => import("apc/Apc"));

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App: React.FC = () => {
  return (
    <Layout className="h-screen">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[
              {
                title: "Home",
              },
              {
                title: <a href="">Apc</a>,
              },
              {
                title: <a href="">Fdc</a>,
              },
              {
                title: <a href="">Rms</a>,
              },
            ]}
          />
          {/* <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content> */}
          <Content className="bg-white rounded-md">
            <Suspense fallback={<div>loading!!!!</div>}>
              <RemoteApc />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
