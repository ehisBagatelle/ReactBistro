import React from 'react';
import renderer from 'react-test-renderer';
import CatalogSection from '../../../src/components/CatalogSection';
import { LineItem } from '../../../src/services/OrderService';

const mockOnCatalogItemPress = jest.fn();

const sampleItem: LineItem = {
  key: "0002",
  name: 'Test Item',
  category: 'Test Category',
  price: 9.99,
};

const sampleSections = [
  {
    title: 'Test Section 1',
    data: [sampleItem, sampleItem, sampleItem],
  },
  {
    title: 'Test Section 2',
    data: [sampleItem, sampleItem],
  },
];

describe('CatalogSection', () => {
  it('renders correctly with sections and items', () => {
    const tree = renderer.create(
      <CatalogSection sections={sampleSections} onCatalogItemPress={mockOnCatalogItemPress} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
