import React from "react";
import { View } from "react-native";

import DiscountView from "./DiscountView";
import { discounts } from "../../../test/fixture";

export default () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    }}
  >
    <DiscountView discounts={discounts} />
  </View>
);
