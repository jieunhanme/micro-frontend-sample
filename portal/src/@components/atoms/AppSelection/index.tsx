import { useEffect, useState } from "react";
import { Select } from "antd";
import { CapitalizeWord } from "@src/utils/capitalize-word";

export default function AppSelection() {
  const [apps, setApps] = useState([]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    const getData = async () => {
      fetch("/json/app.json")
        .then((res) => res.json())
        .then((res) => setApps(res))
        .catch((err) => console.error(err));
    };
    getData();
  }, []);

  return (
    <Select
      defaultValue="portal"
      style={{ width: 80 }}
      onChange={handleChange}
      options={Object.keys(apps).map((app) => ({
        value: app,
        label: CapitalizeWord(app),
      }))}
    />
  );
}
