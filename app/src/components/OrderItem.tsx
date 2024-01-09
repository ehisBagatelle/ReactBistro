import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { LineItem } from "../services/OrderService";
import { styles } from "./Components.styles";
import { formatDecimal } from "../helper";

interface Props {
  item: LineItem;
}

const OrderItem: React.FC<Props> = ({ item }) => (
  <View style={styles.rowFront}>
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>${formatDecimal(item.price)}</Text>
    </View>
  </View>
);

export default OrderItem;
