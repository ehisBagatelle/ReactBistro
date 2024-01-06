import { LineItem, Bill, Discount } from "../../services/OrderService";

export const CALCULATE_BILL = "CALCULATE_BILL";
export const ADD_LINE_ITEM = "ADD_LINE_ITEM";
export const ADD_DISCOUNT = "ADD_DISCOUNT";

export type State = {
  bill: Bill;
  lineItems: LineItem[]
  discounts: Discount[]
};
