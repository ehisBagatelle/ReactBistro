import React, { useState } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import OrderItem from "./OrderItem";
import { LineItem } from "../services/OrderService";
import { styles } from "./Components.styles";
import { TouchableOpacity, View, Text } from "react-native";

interface Props {
  lineItems: LineItem[];
  addOrRemoveLineItem: (item: LineItem) => void;
}

const OrderList: React.FC<Props> = ({ lineItems, addOrRemoveLineItem }) => {
  const closeRow = (
    rowMap: { [x: string]: { closeRow: () => void } },
    rowKey: string
  ) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: any, lineItem: LineItem) => {
    closeRow(rowMap, lineItem.key);
    addOrRemoveLineItem(lineItem);
  };

  const onRowDidOpen = (rowKey: string) => {
    console.log("This row opened", rowKey);
  };

  const renderHiddenItem = (
    data: { item: LineItem },
    rowMap: { [x: string]: { closeRow: () => void } }
  ) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => closeRow(rowMap, data.item.key)}
        >
          <Text style={styles.backTextWhite}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => deleteRow(rowMap, data.item)}
        >
          <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SwipeListView
      data={lineItems}
      renderItem={(data) => <OrderItem item={data.item} />}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-150}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onRowDidOpen={onRowDidOpen}
    />
  );
};

export default OrderList;
