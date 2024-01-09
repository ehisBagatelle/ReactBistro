import { store } from "../../src/store/store";
import { addOrRemoveLineItem, addOrRemoveDiscount, calculateBill } from "../../src/store/cart/actions";
import { Discount } from "../../src/services/OrderService";

describe("calculateBill action", () => {
  test("Store is updated correctly", () => {
    const expectedResult = {
      totalTaxes: "2.29",
      totalDiscounts: "1.53",
      subTotal: "12.99",
      total: "13.75",
    };
    const lineItems = [
      { name: "Cider", category: "Alcohol", price: 6.0, key: "36" }, // tax = 1.38
      { name: "Hotdog", category: "Mains", price: 3.99, key: "37" }, // tax = 0.51
      { name: "Orange Juice", category: "Drinks", price: 3.0, key: "38" }, // tax = 0.39
    ];

    store.dispatch(
      calculateBill(lineItems, [{ id: 124, type: "percentage", amount: 10 }])
    );

    const newState = store.getState();
    expect(newState.cart.bill).toEqual(expectedResult);
  });
});

describe("addOrRemoveLineItem action", () => {
  test("Item is added correctly", () => {
    const initialLineItems = [
      { name: "Cider", category: "Alcohol", price: 6.0, key: "36" },
      { name: "Hotdog", category: "Mains", price: 3.99, key: "37" },
    ];
    const newItem = { name: "Pizza", category: "Mains", price: 9.99, key: "38" };

    store.dispatch(addOrRemoveLineItem(initialLineItems, newItem));

    const newState = store.getState();
    expect(newState.cart.lineItems).toContainEqual(newItem);
  });

  test("Item is removed correctly", () => {
    const initialLineItems = [
      { name: "Cider", category: "Alcohol", price: 6.0, key: "36" },
      { name: "Hotdog", category: "Mains", price: 3.99, key: "37" },
      { name: "Pizza", category: "Mains", price: 9.99, key: "38" },
    ];
    const itemToRemove = { name: "Pizza", category: "Mains", price: 9.99, key: "38" };

    store.dispatch(addOrRemoveLineItem(initialLineItems, itemToRemove));

    const newState = store.getState();
    expect(newState.cart.lineItems).not.toContainEqual(itemToRemove);
  });
});

describe("addOrRemoveDiscount action", () => {
  test("Discount is added correctly", () => {
    const initialDiscounts: Discount[] = [
      { id: 123, type: "percentage", amount: 5 },
      { id: 124, type: "dollar", amount: 2 },
    ];
    const newDiscount: Discount = { id: 125, type: "percentage", amount: 10 };

    store.dispatch(addOrRemoveDiscount(initialDiscounts, newDiscount));

    const newState = store.getState();
    expect(newState.cart.appliedDiscounts).toContainEqual(newDiscount);
  });

  test("Discount is removed correctly", () => {
    const initialDiscounts: Discount[] = [
      { id: 123, type: "percentage", amount: 5 },
      { id: 124, type: "dollar", amount: 2 },
      { id: 125, type: "percentage", amount: 10 },
    ];
    const discountToRemove: Discount = { id: 124, type: "dollar", amount: 2 };

    store.dispatch(addOrRemoveDiscount(initialDiscounts, discountToRemove));

    const newState = store.getState();
    expect(newState.cart.appliedDiscounts).not.toContainEqual(discountToRemove);
  });
});
