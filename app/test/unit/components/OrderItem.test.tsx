import React from 'react';
import renderer from 'react-test-renderer';
import OrderItem from '../../../src/components/OrderItem';

describe('OrderItem component', () => {
  it('renders correctly', () => {
    const mockItem = {
      name: "Test Item",
      category: "Test Category",
      price: 9.99,
      key: "3003"
    };

    const tree = renderer.create(<OrderItem item={mockItem} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
