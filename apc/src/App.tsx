import { useAtom } from "jotai";
import { useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import { localeAtom } from "portal/shareStates";

function App() {
  const [count, setCount] = useState(0);
  const [locale] = useAtom<"ko" | "en">(localeAtom);
  const { t, i18n } = useTranslation();
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <h1 className="text-3xl font-bold underline">Hello world! {locale}</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {t("APC_Title")}
      {t("APC_Description")}
    </I18nextProvider>
  );
}

export default App;
