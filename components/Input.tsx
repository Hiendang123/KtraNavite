import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Product } from "../context/Products";
import * as Crypto from "expo-crypto";

type ProductInputProps = {
  dispatch: React.Dispatch<
    | { type: "ADD_PRODUCT"; payload: Product }
    | { type: "REMOVE_PRODUCT"; id: string }
  >;
};

const Input = ({ dispatch }: ProductInputProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = () => {
    const priceVal = parseFloat(price);
    const qtyVal = parseInt(quantity);

    if (!name || !price || !quantity || priceVal <= 0 || qtyVal <= 0) {
      Alert.alert("Invalid input", "Please enter valid product details");
      return;
    }

    const newProduct: Product = {
      id: Crypto.randomUUID(),
      name,
      price: priceVal,
      quantity: qtyVal,
    };

    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter product name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Enter quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="ADD PRODUCT" color="#2a9d8f" onPress={handleAdd} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
});
