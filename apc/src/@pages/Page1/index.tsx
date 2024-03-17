import Layout from "@src/@components/layout";
import SearchCondition from "@src/@pages/Page1/SearchCondition";
import MainTab from "@src/@pages/Page1/MainTab";
// import {
//   ModelControlParameterAtom,
//   derivedModelSearchAtomWithRead,
// } from "@src/states/model";
import { Provider, createStore } from "jotai";

export default function Page1() {
  const modelStore = createStore();
  // const [modelControlParam, setModelControlParam] = useAtom(
  //   ModelControlParameterAtom
  // );
  // store.sub(
  //   atom((get) => [get(aAtom), get(bAtom)]),
  //   () => {}
  // );

  // modelStore.sub(
  //   atom((get) => [
  //     get(derivedModelSearchAtomWithRead),
  //     get(ModelControlParameterAtom),
  //   ]),
  //   () => {
  //     const searchCondition = modelStore.get(derivedModelSearchAtomWithRead);
  //     console.log(
  //       "PAGE1, modelSearchAtom value is changed to",
  //       searchCondition,
  //       modelControlParam
  //     );
  //     // TODO CALL API
  //     setModelControlParam(getTapPage1Data());
  //   }
  // );

  return (
    <Provider store={modelStore}>
      <Layout>
        <Layout.Side>
          <SearchCondition />
        </Layout.Side>
        <Layout.Content>
          <MainTab />
        </Layout.Content>
      </Layout>
    </Provider>
  );
}
