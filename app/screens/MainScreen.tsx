import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { getCatalog } from "../store/catalog/actions";
import { RootState } from "../store/store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const MainScreen = () => {
  const { categories, taxes, discounts } = useAppSelector((state: RootState) => state.catalog);
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getCatalog());
  }, []);

  console.log('------> Categorie', categories)
  console.log('------> Taxes', taxes)
  console.log('------> Discounts', discounts)

  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

