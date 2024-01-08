import React from "react";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import DiscountView from "./DiscountView";
import { Discount } from "../../services/OrderService";
import { addOrRemoveDiscount } from "../../store/cart/actions";

export const DiscountScreen = () => {
  const dispatch = useAppDispatch();
  const { discounts } = useAppSelector((state: RootState) => state.catalog);
  const { appliedDiscounts } = useAppSelector(
    (state: RootState) => state.cart
  );
  
  return (
    <DiscountView
      discounts={discounts}
      appliedDiscounts={appliedDiscounts}
      onPressDiscount={(discount: Discount) =>
        dispatch(addOrRemoveDiscount(appliedDiscounts, discount))
      }
    />
  );
};
