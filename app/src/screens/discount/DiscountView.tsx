import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Layout from "../../components/Layout";
import { Discount } from "../../services/OrderService";

interface Props {
  discounts: Discount[];
  appliedDiscounts: Discount[];
  onPressDiscount: (discount: Discount) => void;
}

const DiscountView: React.FC<Props> = ({
  discounts,
  appliedDiscounts,
  onPressDiscount,
}: Props) => {
  const renderItem = ({ item }: { item: Discount }) => (
    <TouchableOpacity
      onPress={() => onPressDiscount(item)}
      style={styles.discountItem}
    >
      <Text>
        {item.type === "dollar" ? `$${item.amount}` : `${item.amount}%`}
      </Text>
      {appliedDiscounts.find((discount) => discount.id === item.id) && (
        <Image style={styles.icon} source={require("../../../assets/icons8-check-50.png")} />
      )}
    </TouchableOpacity>
  );

  return (
    <Layout>
      <View>
        <FlatList
          data={discounts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  discountItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 50
  },
  icon: {
    height: 30, 
    width: 30
  }
});

export default DiscountView;
