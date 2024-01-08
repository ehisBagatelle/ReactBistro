import { Tax, Discount } from "../src/services/OrderService";
import { MenuCategory } from "../src/store/catalog/types";

export const categories: MenuCategory[] = [
  {
    title: "Appetizers",
    data: [
      { name: "Nachos", category: "Appetizers", price: 13.99 },
      { name: "Calamari", category: "Appetizers", price: 11.99 },
      { name: "Caesar Salad", category: "Appetizers", price: 10.99 },
    ],
  },
  {
    title: "Mains",
    data: [
      { name: "Burger", category: "Mains", price: 9.99 },
      { name: "Hotdog", category: "Mains", price: 3.99 },
      { name: "Pizza", category: "Mains", price: 12.99 },
    ],
  },
  {
    title: "Drinks",
    data: [
      { name: "Water", category: "Drinks", price: 0.0 },
      { name: "Pop", category: "Drinks", price: 2.0 },
      { name: "Orange Juice", category: "Drinks", price: 3.0 },
    ],
  },
  {
    title: "Alcohol",
    data: [
      { name: "Beer", category: "Alcohol", price: 5.0 },
      { name: "Cider", category: "Alcohol", price: 6.0 },
      { name: "Wine", category: "Alcohol", price: 7.0 },
    ],
  },
];

export const taxes: Tax[] = [
  {
    name: "Tax 1",
    rate: 0.05,
    appliesToCategories: ["Appetizers", "Mains", "Drinks", "Alcohol"],
  },
  {
    name: "Tax 2",
    rate: 0.08,
    appliesToCategories: ["Appetizers", "Mains", "Drinks", "Alcohol"],
  },
  { name: "Alcohol Tax", rate: 0.1, appliesToCategories: ["Alcohol"] },
];

export const discounts: Discount[] = [
  { id: 3233, type: "dollar", amount: 5 },
  { id: 3234, type: "percentage", amount: 10 },
  { id: 3235, type: "percentage", amount: 20 },
];
