import React, { useEffect } from "react";
import { getCatalog } from "../../store/catalog/actions";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigation } from "@react-navigation/native";
import MainView from "./MainView";

export const MainScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { categories } = useAppSelector((state: RootState) => state.catalog);

  useEffect(() => {
    dispatch(getCatalog());
  }, []);

  return (
    <MainView
      categories={categories}
      order={[]}
      gotoDiscounts={() => navigation.navigate("Discount")}
    />
  );
};
