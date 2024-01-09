import cartReducer, { initialState } from '../../../src/store/cart/reducer'
import {
  ADD_OR_REMOVE_DISCOUNT,
  ADD_OR_REMOVE_LINE_ITEM,
  CALCULATE_BILL,
} from'../../../src/store/cart/types'

describe("Cart Reducer", () => {
  it("should return the initial state", () => {
    const newState = cartReducer(undefined, {} as any);
    expect(newState).toEqual(initialState);
  });

  it("should handle CALCULATE_BILL action", () => {
    const mockBill = {
      totalTaxes: "10.00",
      totalDiscounts: "5.00",
      subTotal: "50.00",
      total: "55.00",
    };

    const action = {
      type: CALCULATE_BILL,
      payload: mockBill,
    };

    const newState = cartReducer(initialState, action);

    expect(newState.bill).toEqual(mockBill);
  });

  it("should handle ADD_OR_REMOVE_DISCOUNT action", () => {
    const mockDiscounts = [
      {
        id: 1,
        type: "percentage",
        amount: 5,
      },
      {
        id: 2,
        type: "dollar",
        amount: 2,
      },
    ];

    const action = {
      type: ADD_OR_REMOVE_DISCOUNT,
      payload: mockDiscounts,
    };

    const newState = cartReducer(initialState, action);

    expect(newState.appliedDiscounts).toEqual(mockDiscounts);
  });

  it("should handle ADD_OR_REMOVE_LINE_ITEM action", () => {
    const mockLineItems = [
      {
        key: "2",
        name: "Item 2",
        category: "Category B",
        price: 15,
      },
      {
        key: "3",
        name: "Item 3",
        category: "Category C",
        price: 20,
      },
    ];

    const action = {
      type: ADD_OR_REMOVE_LINE_ITEM,
      payload: mockLineItems,
    };

    const newState = cartReducer(initialState, action);

    expect(newState.lineItems).toEqual(mockLineItems);
  });
});
