import React from "react";
import renderer from "react-test-renderer";
import { TouchableOpacity, Image } from "react-native";
import DiscountView from "../../../src/screens/discount/DiscountView";
import { discounts } from "../../fixtures/TestData";

describe("DiscountView component", () => {
  const mockDiscounts = [
    { id: 1, type: "dollar", amount: 5 },
    { id: 2, type: "percentage", amount: 10 },
  ];

  const mockAppliedDiscounts = [
    mockDiscounts[0]
  ];

  const mockOnPressDiscount = jest.fn();

  it("renders correctly with discounts", () => {
    const tree = renderer
      .create(
        <DiscountView
          discounts={discounts}
          appliedDiscounts={[discounts[0]]}
          onPressDiscount={mockOnPressDiscount}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("calls onPressDiscount when a discount is pressed", () => {
    const component = renderer.create(
      <DiscountView
        discounts={[discounts[0]]}
        appliedDiscounts={[]}
        onPressDiscount={mockOnPressDiscount}
      />
    );

    const touchableOpacity = component.root.findByType(TouchableOpacity);
    touchableOpacity.props.onPress();
    expect(mockOnPressDiscount).toHaveBeenCalledWith(discounts[0]);
  });

  it("renders correctly without discounts", () => {
    const tree = renderer
      .create(
        <DiscountView
          discounts={[]}
          appliedDiscounts={[]}
          onPressDiscount={mockOnPressDiscount}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly without applied discounts", () => {
    const tree = renderer
      .create(
        <DiscountView
          discounts={discounts}
          appliedDiscounts={[]}
          onPressDiscount={mockOnPressDiscount}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
