import {
  ModelControlParameterData,
  ModelSearchCondition,
} from "@src/@types/model";
import { atom } from "jotai";

const modelSearchAtom = atom<ModelSearchCondition | null>(null);

const derivedModelSearchAtomWithRead = atom((get) => get(modelSearchAtom));
const derivedModelSearchAtomWithWriteOnly = atom(
  null,
  (_, set, update: ModelSearchCondition) => {
    set(modelSearchAtom, update);
  }
);

const ModelControlParameterAtom = atom<ModelControlParameterData | null>(null);
const derivedModelNameAtomWithRead = atom(
  (get) => get(ModelControlParameterAtom)?.modelName
);

export {
  derivedModelSearchAtomWithRead,
  derivedModelSearchAtomWithWriteOnly,
  ModelControlParameterAtom,
  derivedModelNameAtomWithRead,
};
