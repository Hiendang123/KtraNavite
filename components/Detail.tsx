import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Detail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "ProductDetail">>();
  const { product } = route.params;

  return (
    <LinearGradient colors={["#fff", "#e0f7f1"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>📦 PRODUCT DETAILS</Text>

        {/* Name Row */}
        <View style={styles.row}>
          <Text style={styles.label}>🛠️ Name:</Text>
          <Text style={[styles.value, styles.bold]}>{product.name}</Text>
        </View>

        {/* Price Row */}
        <View style={styles.row}>
          <Text style={styles.label}>💰 Price:</Text>
          <Text style={[styles.value, { color: "#e63946" }]}>
            ${product.price}
          </Text>
        </View>

        {/* Quantity Row */}
        <View style={styles.rowWithoutBorder}>
          <Text style={styles.label}>📦 Quantity:</Text>
          <Text style={styles.value}>{product.quantity}</Text>
        </View>

        {/* Total Row */}
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>💳 Total:</Text>
          <Text style={styles.totalValue}>
            ${(product.price * product.quantity).toFixed(2)}
          </Text>
        </View>

        {/* Close Button */}
        <View style={{ width: "60%", marginTop: 20 }}>
          <Button
            title="CLOSE"
            color="#e63946"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2a9d8f",
    marginBottom: 15,
  },
  bold: { fontWeight: "bold" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#dedede",
  },
  rowWithoutBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 6,
  },
  label: {
    flexDirection: "row",
  },
  value: {
    textAlign: "right",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2a9d8f",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginTop: 10,
  },
  totalLabel: {
    color: "#fff",
    fontWeight: "bold",
  },
  totalValue: {
    color: "#fff",
    fontWeight: "bold",
  },
  total: {
    marginVertical: 10,
    backgroundColor: "#2a9d8f",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
