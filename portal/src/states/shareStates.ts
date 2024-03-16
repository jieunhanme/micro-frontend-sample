import { atomWithStorage } from "jotai/utils";

export const localeAtom = atomWithStorage("locale", "ko", undefined, {
  getOnInit: true,
});
export const layoutAtom = atomWithStorage("headerVisible", true, undefined, {
  getOnInit: true,
});
