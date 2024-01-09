import { GET_CATEGORIES, GET_DISCOUNTS, State } from "./types";

export const initialState: State = {
  categories: [],
  discounts: []
};

type ActionType = {
  type: string;
  payload: any;
};

export default (state = initialState, { type, payload }: ActionType) => {
  switch (type) {
    case GET_CATEGORIES:
      return { ...state, categories: payload };
    case GET_DISCOUNTS:
      return { ...state, discounts: payload };
  }
  return state;
};
