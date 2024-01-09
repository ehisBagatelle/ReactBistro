import React from "react";
import { View } from "react-native";

import DiscountView from "./DiscountView";
import { discounts } from "../../../test/fixtures/TestData";
import { Discount } from "../../services/OrderService";

export default () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    }}
  >
    <DiscountView
      discounts={discounts}
      appliedDiscounts={discounts}
      onPressDiscount={function (discount: Discount): void {
        throw new Error("Function not implemented.");
      }}
    />
  </View>
);
