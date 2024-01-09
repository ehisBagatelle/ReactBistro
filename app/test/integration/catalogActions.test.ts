import { getCatalog } from "../../src/store/catalog/actions";
import { store } from "../../src/store/store";
import { categories, discounts } from "../fixtures/TestData";

describe("getCatalog action", () => {
  test("Categories and Discounts are loaded correctly", () => {
    store.dispatch(getCatalog());
    const newState = store.getState();
    expect(newState.catalog).toEqual({categories, discounts});
  });
});
