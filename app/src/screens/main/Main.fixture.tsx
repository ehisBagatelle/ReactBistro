import React from "react";
import { View } from "react-native";

import MainView from "./MainView";
import { categories } from "../../../test/fixtures/TestData";
import { LineItem } from "../../services/OrderService";

export default () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    }}
  >
    <MainView
      categories={categories}
      lineItems={categories[0].data}
      bill={{
        totalTaxes: "2.29",
        totalDiscounts: "1.53",
        subTotal: "12.99",
        total: "13.75",
      }}
      gotoDiscounts={() => null}
      addOrRemoveLineItem={(lineItem: LineItem) => null}
    />
  </View>
);
