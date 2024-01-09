import React from "react";
import renderer from "react-test-renderer";
import { View } from "react-native";
import MainView from "../../../src/screens/main/MainView";
import { categories } from "../../fixtures/TestData";

const mockGotoDiscounts = jest.fn();
const mockAddOrRemoveLineItem = jest.fn();
const mockBill = {
  subTotal: "10",
  totalDiscounts: "2",
  totalTaxes: "1",
  total: "9",
};

jest.mock("react-native-swipe-list-view", () => ({
  SwipeListView: () => "SwipeListView",
}));

describe("MainView component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MainView
          categories={categories}
          lineItems={categories[0].data}
          gotoDiscounts={mockGotoDiscounts}
          addOrRemoveLineItem={mockAddOrRemoveLineItem}
          bill={mockBill}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
