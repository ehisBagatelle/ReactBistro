import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { MainScreen } from "./src/screens/main/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DiscountScreen } from "./src/screens/discount/DiscountScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Discount" component={DiscountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
