import React, { useEffect } from "react";
import { getCatalog } from "../../store/catalog/actions";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import MainView from "./MainView";
import { addOrRemoveLineItem, calculateBill } from "../../store/cart/actions";
import { LineItem } from "../../services/OrderService";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const MainScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { categories } = useAppSelector((state: RootState) => state.catalog);
  const { lineItems, appliedDiscounts, bill } = useAppSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    dispatch(getCatalog());
  }, []);

  useEffect(() => {
    dispatch(calculateBill(lineItems, appliedDiscounts));
  }, [lineItems, appliedDiscounts]);

  return (
    <MainView
      categories={categories}
      lineItems={lineItems}
      bill={bill}
      gotoDiscounts={() => navigation.navigate("Discount")}
      addOrRemoveLineItem={(lineItem: LineItem) =>
        dispatch(addOrRemoveLineItem(lineItems, lineItem))
      }
    />
  );
};
