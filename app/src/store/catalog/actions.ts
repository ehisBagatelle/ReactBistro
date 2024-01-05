import { Dispatch } from "redux";
import { GET_CATEGORIES, GET_TAXES, GET_DISCOUNTS } from "./types";
import { categories, discounts, taxes } from "../../../test/fixture";

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
    type: GET_DISCOUNTS,
    payload: discounts,
  });
};
