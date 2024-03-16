import { LaptopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function NavTitle() {
  return (
    <Link to="/">
      <div className="flex items-center gap-1 pr-3 font-bold">
        <LaptopOutlined />
        MFA SAMPLE
      </div>
    </Link>
  );
}
