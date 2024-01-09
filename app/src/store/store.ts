import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalog/reducer";
import cartReducer from "./cart/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
