import React from 'react';
import renderer from 'react-test-renderer';
import DiscountAndBill from '../../../src/components/DiscountAndBill';
import { Bill, LineItem } from '../../../src/services/OrderService';

const mockOnPressDiscount = jest.fn();

const sampleItem: LineItem = {
  name: 'Test Item',
  category: 'Test Category',
  price: 9.99,
  key: '003'
};

const sampleBill: Bill = {
  subTotal: "29.97",
  totalDiscounts: "5.00",
  totalTaxes: "2.00",
  total: "27.97",
};

describe('DiscountAndBill', () => {
  it('renders correctly with discount and bill data', () => {
    const tree = renderer.create(
      <DiscountAndBill onPressDiscount={mockOnPressDiscount} order={[sampleItem, sampleItem]} bill={sampleBill} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
