import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../components/Products";
import Detail from "../components/Detail";
import { Product } from "../context/Products";

export type RootStackParamList = {
  ProductManager: undefined;
  ProductDetail: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="ProductManager">
    <Stack.Screen name="ProductManager" component={Products} />
    <Stack.Screen name="ProductDetail" component={Detail} />
  </Stack.Navigator>
);

export default AppNavigator;
