import { Dispatch } from "redux";
import { GET_CATEGORIES, GET_TAXES, GET_DISCOUNT } from "./types";
import { categories, discounts, taxes } from "./fixture";

export const getCatalog = () => (dispatch: Dispatch) => {
  dispatch({
    type: GET_CATEGORIES,
    payload: categories,
  });
  dispatch({
    type: GET_TAXES,
    payload: taxes,
  });
  dispatch({
    type: GET_DISCOUNT,
    payload: discounts,
  });
};
