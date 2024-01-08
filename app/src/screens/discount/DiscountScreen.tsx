import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RootState } from "../../store/store";
import { useAppSelector } from "../../store/hooks";
import { useNavigation } from "@react-navigation/native";
import DiscountView from "./DiscountView";

export const DiscountScreen = () => {
  const { discounts } = useAppSelector((state: RootState) => state.catalog);
  const navigation = useNavigation();

  return <DiscountView discounts={discounts} />;
};
