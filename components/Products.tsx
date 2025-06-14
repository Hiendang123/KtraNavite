import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import { initialState, reducer } from "../context/Products";
import Input from "./Input";
import List from "./List";

const Products = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalValue = state.products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Input dispatch={dispatch} />
      <List products={state.products} dispatch={dispatch} />
      <View style={styles.total}>
        <Text style={styles.totalText}>💵 Total: ${totalValue.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  total: {
    backgroundColor: "#2a9d8f",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  totalText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
