import { Dispatch } from "redux";
import { ADD_DISCOUNT, ADD_LINE_ITEM, CALCULATE_BILL } from "./types";
import { Discount, LineItem, OrderService } from "../../services/OrderService";

export const calculateBill =
  (lineItems: LineItem[], appliedDiscounts: Discount[]) =>
  (dispatch: Dispatch) => {
    const orderService = new OrderService();
    dispatch({
      type: CALCULATE_BILL,
      payload: orderService.calculateBill(lineItems, appliedDiscounts),
    });
  };

export const addLineItem = (lineItems: LineItem[]) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_LINE_ITEM,
    payload: lineItems,
  });
};

export const AddDiscount = (discounts: LineItem[]) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_DISCOUNT,
    payload: discounts,
  });
};
