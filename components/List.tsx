import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Product } from "../context/Products";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type ListProductProps = {
  products: Product[];
  dispatch: React.Dispatch<
    | { type: "ADD_PRODUCT"; payload: Product }
    | { type: "REMOVE_PRODUCT"; id: string }
  >;
};

const List = ({ products, dispatch }: ListProductProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const sorted = [...products].sort(
    (a, b) => b.price * b.quantity - a.price * a.quantity
  );

  return (
    <FlatList
      data={sorted}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductDetail", { product: item })
          }
        >
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Qty: {item.quantity}</Text>
            <Text style={{ color: "#2a9d8f", fontWeight: "bold" }}>
              Total: ${(item.price * item.quantity).toFixed(2)}
            </Text>
            <Button
              title="REMOVE"
              color="#e63946"
              onPress={() => dispatch({ type: "REMOVE_PRODUCT", id: item.id })}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
