import { GET_CATEGORIES, GET_TAXES, GET_DISCOUNT, State } from "./types";

const initialState: State = {
  categories: null,
  taxes: [],
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
    case GET_TAXES:
      return { ...state, taxes: payload };
    case GET_DISCOUNT:
      return { ...state, discounts: payload };
  }
  return state;
};
