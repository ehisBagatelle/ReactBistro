import { taxes } from "../../test/fixture";
import { formatDecimal } from "../helper";

export type LineItem = {
  name: string;
  category: string;
  price: number;
};

export type Tax = {
  name: string;
  rate: number;
  appliesToCategories: string[];
};

export type Discount = {
  id: number
  type: "dollar" | "percentage";
  amount: number;
};

export type Bill = {
  totalTaxes: string;
  totalDiscounts: string;
  subTotal: string;
  total: string;
};

export interface IOrderService {
  calculateBill(lineItems: LineItem[], appliedDiscounts: Discount[]): Bill;
}

export class OrderService implements IOrderService {
  taxes: Tax[] = taxes;

  public calculateBill(
    lineItems: LineItem[],
    appliedDiscounts: Discount[]
  ): Bill {
    let subTotal = 0;

    // Calculate pre-tax total
    lineItems.forEach((item) => {
      subTotal += item.price;
    });

    // Calculate total taxes
    const totalTaxes = this.calculateTotalTaxes(lineItems);
    
    // Calculate post-tax total
    const postTaxTotal = subTotal + totalTaxes;

    // Calculate total discounts
    const totalDiscounts = this.calculateTotalDiscounts(
      appliedDiscounts,
      postTaxTotal
    );

    const total = postTaxTotal - totalDiscounts

    return {
      totalTaxes: formatDecimal(totalTaxes),
      totalDiscounts: formatDecimal(totalDiscounts),
      subTotal: formatDecimal(subTotal),
      total: formatDecimal(total)
    };
  }

  private calculateTotalTaxes(lineItems: LineItem[]): number {
    let totalTaxes = 0;

    lineItems.forEach((item) => {
      const applicableTaxes = this.taxes.filter((tax) =>
        tax.appliesToCategories.includes(item.category)
      );

      applicableTaxes.forEach((tax) => {
        totalTaxes += item.price * tax.rate;
      });
    });

    return totalTaxes;
  }

  private calculateTotalDiscounts(
    appliedDiscounts: Discount[],
    postTaxTotal: number
  ): number {
    // The order of applied discounts matter and can change the final output totals
    // We recommend going dollar amount discounts first
    let postDiscountTotal = postTaxTotal;
  
    // Separate dollar amount discounts and percentage discounts
    const dollarAmountDiscounts = appliedDiscounts.filter(
      (discount) => discount.type === "dollar"
    );
  
    const percentageDiscounts = appliedDiscounts.filter(
      (discount) => discount.type === "percentage"
    );
  
    // Apply dollar amount discounts first
    dollarAmountDiscounts.forEach((discount) => {
        postDiscountTotal -= discount.amount;
    });
  
    // Apply percentage discounts after dollar amount discounts
    percentageDiscounts.forEach((discount) => {
        postDiscountTotal -= (discount.amount / 100) * postDiscountTotal;
    });
  
    return postTaxTotal - postDiscountTotal;
  }
}
