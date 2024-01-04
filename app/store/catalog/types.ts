export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_TAXES = "GET_TAXES";
export const GET_DISCOUNT = "GET_DISCOUNT";

export type MenuItem = {
  name: string;
  category: string;
  price: number;
};

export type MenuCategory = {
  [key: string]: MenuItem[];
};

export type Tax = {
  name: string;
  rate: number;
  appliesToCategories: string[];
};

export type Discount = {
  type: "dollar" | "percentage";
  amount: number;
};

export type State = {
    categories: MenuCategory | null,
    taxes: Tax[],
    discounts: Discount[]
}