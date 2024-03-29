import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Components.styles";
import { Title } from "./Title";
import { Bill, LineItem } from "../services/OrderService";

interface Props {
  onPressDiscount: () => void;
  order: LineItem[];
  bill: Bill
}

const DiscountAndBill: React.FC<Props> = ({ onPressDiscount, order, bill }) => (
  <View style={styles.discountAndBill}>
    <View style={styles.discount}>
      <TouchableOpacity onPress={onPressDiscount}>
        <Title
          name="Tap To Add Discount"
          iconSource={require("../../assets/icons8-discount-50.png")}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.bill}>
      <View style={styles.billItem}>
        <Text style={styles.billItemText}>Subtotal</Text>
        <Text style={styles.billItemAmount}>${bill.subTotal}</Text>
      </View>
      <View style={styles.billItem}>
        <Text style={styles.billItemText}>Discounts</Text>
        <Text style={styles.billItemAmount}>${bill.totalDiscounts}</Text>
      </View>
      <View style={styles.billItem}>
        <Text style={styles.billItemText}>Tax</Text>
        <Text style={styles.billItemAmount}>${bill.totalTaxes}</Text>
      </View>
      <View style={styles.billItem}>
        <Text
          style={styles.billItemText}
        >{`Total (${order.length} item)`}</Text>
        <Text style={styles.billItemAmount}>${bill.total}</Text>
      </View>
    </View>
  </View>
);

export default DiscountAndBill;
