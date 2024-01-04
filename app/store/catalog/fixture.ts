import { Discount, MenuCategory, Tax } from "./types";

export const categories: MenuCategory = {
  appetizers: [
    { name: "Nachos", category: "Appetizers", price: 13.99 },
    { name: "Calamari", category: "Appetizers", price: 11.99 },
    { name: "Caesar Salad", category: "Appetizers", price: 10.99 },
  ],
  mains: [
    { name: "Burger", category: "Mains", price: 9.99 },
    { name: "Hotdog", category: "Mains", price: 3.99 },
    { name: "Pizza", category: "Mains", price: 12.99 },
  ],
  drinks: [
    { name: "Water", category: "Drinks", price: 0.0 },
    { name: "Pop", category: "Drinks", price: 2.0 },
    { name: "Orange Juice", category: "Drinks", price: 3.0 },
  ],
  alcohol: [
    { name: "Beer", category: "Alcohol", price: 5.0 },
    { name: "Cider", category: "Alcohol", price: 6.0 },
    { name: "Wine", category: "Alcohol", price: 7.0 },
  ],
};

export const taxes: Tax[] = [
  {
    name: "Tax 1",
    rate: 0.05,
    appliesToCategories: ["appetizers", "mains", "drinks", "alcohol"],
  },
  {
    name: "Tax 2",
    rate: 0.08,
    appliesToCategories: ["appetizers", "mains", "drinks", "alcohol"],
  },
  { name: "Alcohol Tax", rate: 0.1, appliesToCategories: ["alcohol"] },
];

export const discounts: Discount[] = [
  { type: "dollar", amount: 5 },
  { type: "percentage", amount: 10 },
  { type: "percentage", amount: 20 },
];
