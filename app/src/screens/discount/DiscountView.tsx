import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import Layout from "../../components/Layout";
import { Discount } from "../../services/OrderService";

interface Props {
  discounts: Discount[];
}

const DiscountView: React.FC<Props> = ({ discounts }: Props) => {
  const [selectedDiscounts, setSelectedDiscounts] = useState<number[]>([]);

  const toggleSelection = (discountId: number) => {
    setSelectedDiscounts((prevSelected) => {
      if (prevSelected.includes(discountId)) {
        return prevSelected.filter((id) => id !== discountId);
      } else {
        return [...prevSelected, discountId];
      }
    });
  };

  const renderItem = ({ item }: { item: Discount }) => (
    <TouchableOpacity
      onPress={() => toggleSelection(item.id)}
      style={styles.discountItem}
    >
      <Text>
        {item.type === "dollar" ? `$${item.amount}` : `${item.amount}%`}
      </Text>
      {selectedDiscounts.includes(item.id) && (
        <Image source={require("../../../assets/icons8-check-50.png")} />
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
  },
});

export default DiscountView;
