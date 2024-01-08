import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LineItem } from "../services/OrderService";
import { formatDecimal } from "../helper";
import { styles } from "./Components.styles";

interface Props {
  item: LineItem;
  onPress: () => void;
}

const CatalogItem: React.FC<Props> = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.title}>${formatDecimal(item.price)}</Text>
  </TouchableOpacity>
);

export default CatalogItem;
