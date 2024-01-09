import { Dispatch } from "redux";
import {
  ADD_OR_REMOVE_DISCOUNT,
  ADD_OR_REMOVE_LINE_ITEM,
  CALCULATE_BILL,
} from "./types";
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

export const addOrRemoveLineItem =
  (previousLineItems: LineItem[], lineItem: LineItem) =>
  (dispatch: Dispatch) => {
    const isItemAlreadyAdded = previousLineItems.some(
      (item) => item.name === lineItem.name
    );

    let updatedLineItems: LineItem[] = []

    if (isItemAlreadyAdded) {
      const updatedLineItems = [...previousLineItems];
      const prevIndex = previousLineItems.findIndex(
        (item) => item.key === lineItem.key
      );
      updatedLineItems.splice(prevIndex, 1);
    } else {
      updatedLineItems = [...previousLineItems, lineItem];
    }

    dispatch({
      type: ADD_OR_REMOVE_LINE_ITEM,
      payload: updatedLineItems,
    });
  };

export const addOrRemoveDiscount =
  (previousDiscount: Discount[], discount: Discount) =>
  (dispatch: Dispatch) => {
    const isItemAlreadyAdded = previousDiscount.some(
      (item) => item.id === discount.id
    );

    let updatedDiscounts: Discount[] = []

    if (isItemAlreadyAdded) {
      updatedDiscounts = previousDiscount.filter(
        (item) => item.id !== discount.id
      );
    } else {
      updatedDiscounts = [...previousDiscount, discount];
    }

    dispatch({
      type: ADD_OR_REMOVE_DISCOUNT,
      payload: updatedDiscounts,
    });
  };
