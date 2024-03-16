import AppSelection from "@src/@components/atoms/AppSelection";
import MultiLang from "@src/@components/atoms/MultiLang";
import NavTitle from "@src/@components/atoms/NavTitle";

export default function Header() {
  return (
    <>
      <div className="flex items-center">
        <NavTitle />
        <AppSelection />
      </div>
      <MultiLang />
    </>
  );
}
