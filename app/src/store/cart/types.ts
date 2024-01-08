import { LineItem, Bill, Discount } from "../../services/OrderService";

export const CALCULATE_BILL = "CALCULATE_BILL";
export const ADD_OR_REMOVE_LINE_ITEM = "ADD_OR_REMOVE_LINE_ITEM";
export const ADD_OR_REMOVE_DISCOUNT = "ADD_OR_REMOVE_DISCOUNT";

export type State = {
  bill: Bill;
  lineItems: LineItem[]
  appliedDiscounts: Discount[]
};
