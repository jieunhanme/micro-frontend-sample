import Root from "@src/@components/layout";
import { useLocale } from "@src/hooks/useLocale";

function App() {
  useLocale();
  return (
    <>
      <Root />
    </>
  );
}

export default App;
