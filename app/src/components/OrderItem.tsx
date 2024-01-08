import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { LineItem } from "../services/OrderService";
import { styles } from "./Components.styles";
import { formatDecimal } from "../helper";

interface Props {
  item: LineItem;
}

const OrderItem: React.FC<Props> = ({ item }) => (
  <TouchableHighlight
    onPress={() => console.log("You touched me")}
    style={styles.rowFront}
    underlayColor={"#AAA"}
  >
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>${formatDecimal(item.price)}</Text>
    </View>
  </TouchableHighlight>
);

export default OrderItem;
