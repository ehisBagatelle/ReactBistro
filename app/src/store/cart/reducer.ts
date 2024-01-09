import {
  ADD_OR_REMOVE_DISCOUNT,
  ADD_OR_REMOVE_LINE_ITEM,
  CALCULATE_BILL,
  State,
} from "./types";

export const initialState: State = {
  bill: {
    totalTaxes: "00.00",
    totalDiscounts: "00.00",
    subTotal: "00.00",
    total: "00.00",
  },
  lineItems: [],
  appliedDiscounts: [],
};

type ActionType = {
  type: string;
  payload: any;
};

export default (state = initialState, { type, payload }: ActionType) => {
  switch (type) {
    case CALCULATE_BILL:
      return { ...state, bill: payload };
    case ADD_OR_REMOVE_DISCOUNT:
      return { ...state, appliedDiscounts: payload };
    case ADD_OR_REMOVE_LINE_ITEM:
      return { ...state, lineItems: payload };
  }
  return state;
};
