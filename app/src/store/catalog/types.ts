import { LineItem, Tax, Discount } from "../../services/OrderService";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_DISCOUNTS = "GET_DISCOUNTS";


export type MenuCategory = {
  [key: string]: LineItem[];
};

export type State = {
    categories: MenuCategory | null,
    discounts: Discount[]
}