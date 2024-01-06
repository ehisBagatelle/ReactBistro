import { ADD_DISCOUNT, ADD_LINE_ITEM, CALCULATE_BILL, State } from "./types";

const initialState: State = {
  bill: {
    totalTaxes: "00.00",
    totalDiscounts: "00.00",
    subTotal: "00.00",
    total: "00.00",
  },
  lineItems: [],
  discounts: [],
};

type ActionType = {
  type: string;
  payload: any;
};

export default (state = initialState, { type, payload }: ActionType) => {
  switch (type) {
    case CALCULATE_BILL:
      return { ...state, bill: payload };
    case ADD_DISCOUNT:
      return { ...state, discounts: payload };
    case ADD_LINE_ITEM:
      return { ...state, lineItem: payload };
  }
  return state;
};
