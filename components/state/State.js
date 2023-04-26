import { atom, selector } from "recoil";

export const productState = atom({
  key: "productState",
  default: {},
});

export const getProductState = selector({
  key: "getProductState",
  get: ({ get }) => {
    const product = get(getProductState);
    return product;
  },
});

