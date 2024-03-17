import TabPage1 from "@src/@pages/Page1/tab-page1";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import React from "react";
import { useState } from "react";

const MainTab = React.memo(() => {
  const [, setActiveTab] = useState<string>("1");
  console.log("MainTab render");

  const onChange = (key: string) => {
    setActiveTab(key);
    console.log("MainTab Updated");
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: <TabPage1 />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
});

export default MainTab;
