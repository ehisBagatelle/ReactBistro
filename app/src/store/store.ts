import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalog/reducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  catalog: persistReducer(persistConfig, catalogReducer),
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch