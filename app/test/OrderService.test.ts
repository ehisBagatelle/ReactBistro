import { IOrderService, OrderService } from "../src/services/OrderService";

describe("OrderService", () => {
  let orderService: IOrderService;

  beforeEach(() => {
    orderService = new OrderService();
  });

  it("should calculate bill for one lineItem with no discount", () => {
    const lineItems = [
      { name: "Nachos", category: "Appetizers", price: 13.99 },
    ];
    const expectedTotalTaxRate = 0.05 + 0.08; // Appetizer falls in the category for Tax 1 and Tax 2
    const expectedTotalTax = expectedTotalTaxRate * lineItems[0].price;
    const expectedsubTotal = lineItems[0].price;
    const expectedTotal = expectedsubTotal * (1 + expectedTotalTaxRate);
    const expectTotalDiscount = 0;

    const expectedResult = {
      totalTaxes: expectedTotalTax.toFixed(2),
      totalDiscounts: expectTotalDiscount.toFixed(2),
      subTotal: expectedsubTotal.toFixed(2),
      total: expectedTotal.toFixed(2),
    };

    const result = orderService.calculateBill(lineItems, []);
    expect(result).toEqual(expectedResult);
  });

  it("should apply all taxes for one lineItem with alcohol category", () => {
    const lineItems = [{ name: "Beer", category: "Alcohol", price: 5.0 }];
    const expectedTotalTaxRate = 0.05 + 0.08 + 0.1; // Assuming alcohol falls in the category for Tax 1 and Tax 2 and Alcohol Tax
    const expectedTotalTax = expectedTotalTaxRate * lineItems[0].price;
    const expectedsubTotal = lineItems[0].price;
    const expectedTotal = expectedsubTotal * (1 + expectedTotalTaxRate);
    const expectTotalDiscount = 0;

    const expectedResult = {
      totalTaxes: expectedTotalTax.toFixed(2),
      totalDiscounts: expectTotalDiscount.toFixed(2),
      subTotal: expectedsubTotal.toFixed(2),
      total: expectedTotal.toFixed(2),
    };

    const result = orderService.calculateBill(lineItems, []);
    expect(result).toEqual(expectedResult);
  });

  it("should calculate bill for multiple lineItems with no discount", () => {
    const lineItems = [
      { name: "Nachos", category: "Appetizers", price: 13.99 },
      { name: "Beer", category: "Alcohol", price: 5.0 },
    ];

    const expectedResult = {
      totalTaxes: "2.97", // (0.13 * 13.99) + (0.23 * 5.00)
      totalDiscounts: "0.00",
      subTotal: "18.99", // 13.99 + 5.00
      total: "21.96", // 18.99 + 21.96
    };

    const result = orderService.calculateBill(lineItems, []);
    expect(result).toEqual(expectedResult);
  });

  it("should apply a dollar discount to the bill", () => {
    const lineItems = [
      { name: "Nachos", category: "Appetizers", price: 13.99 },
      { name: "Beer", category: "Alcohol", price: 5.0 },
    ];

    const expectedResult = {
      totalTaxes: "2.97",
      totalDiscounts: "5.00",
      subTotal: "18.99",
      total: "16.96",
    };

    const result = orderService.calculateBill(lineItems, [
      { type: "dollar", amount: 5 },
    ]);
    expect(result).toEqual(expectedResult);
  });

  it("should apply a percentage discount to the bill", () => {
    const lineItems = [
      { name: "Nachos", category: "Appetizers", price: 13.99 },
      { name: "Beer", category: "Alcohol", price: 5.0 },
    ];

    const expectedResult = {
      totalTaxes: "2.97",
      totalDiscounts: "2.20",
      subTotal: "18.99",
      total: "19.76",
    };

    const result = orderService.calculateBill(lineItems, [
      { type: "percentage", amount: 10 },
    ]);
    expect(result).toEqual(expectedResult);
  });

  it("should apply a dollar and percentage discount to the bill", () => {
    const lineItems = [
      { name: "Nachos", category: "Appetizers", price: 13.99 },
      { name: "Beer", category: "Alcohol", price: 5.0 },
    ];

    const expectedResult = {
      totalTaxes: "2.97",
      totalDiscounts: "6.70",
      subTotal: "18.99",
      total: "15.26",
    };

    const result = orderService.calculateBill(lineItems, [
      { type: "percentage", amount: 10 },
      { type: "dollar", amount: 5 },
    ]);
    expect(result).toEqual(expectedResult);
  });

  it('should output the example', () => {
    const lineItems = [
      { name: "Cider", category: "Alcohol", price: 6.0 }, // tax = 1.38
      { name: "Hotdog", category: "Mains", price: 3.99 }, // tax = 0.51
      { name: "Orange Juice", category: "Drinks", price: 3.0 }, // tax = 0.39
    ];

    const expectedResult = {
      totalTaxes: "2.29",
      totalDiscounts: "1.53",
      subTotal: "12.99",
      total: "13.75",
    };

    const result = orderService.calculateBill(lineItems, [
      { type: "percentage", amount: 10 },
    ]);
    expect(result).toEqual(expectedResult);
  })
});
