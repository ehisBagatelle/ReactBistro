import React from "react";
import renderer from "react-test-renderer";
import { TouchableOpacity, Text } from "react-native";
import CatalogItem from "../../../src/components/CatalogItem";
import { LineItem } from "../../../src/services/OrderService";

const mockOnPress = jest.fn();

const sampleItem: LineItem = {
    name: "Test Item",
    category: "Test Category",
    price: 9.99,
    key: "3003"
};

describe("CatalogItem", () => {
  it("renders correctly with item details", () => {
    const tree = renderer
      .create(<CatalogItem item={sampleItem} onPress={mockOnPress} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("calls onPress when TouchableOpacity is pressed", () => {
    const component = renderer.create(
      <CatalogItem item={sampleItem} onPress={mockOnPress} />
    );
    const touchableOpacity = component.root.findByType(TouchableOpacity);

    touchableOpacity.props.onPress();

    expect(mockOnPress).toHaveBeenCalled();
  });
});
