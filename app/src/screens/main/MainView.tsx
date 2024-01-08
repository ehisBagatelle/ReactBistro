import React from "react";
import { View } from "react-native";
import { styles } from "./Main.styles";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import { Bill, LineItem } from "../../services/OrderService";
import DiscountAndBill from "../../components/DiscountAndBill";
import OrderList from "../../components/OrderList";
import CatalogSection from "../../components/CatalogSection";

interface Props {
  categories: {
    title: string;
    data: LineItem[];
  }[];
  lineItems: LineItem[];
  gotoDiscounts: () => void;
  addOrRemoveLineItem: (LineItem: LineItem) => void;
  bill: Bill;
}

const MainView: React.FC<Props> = ({
  categories,
  lineItems,
  gotoDiscounts,
  addOrRemoveLineItem,
  bill,
}: Props) => {
  return (
    <Layout>
      <View style={styles.catalogAndOrder}>
        <View style={styles.catalog}>
          <CatalogSection
            sections={categories}
            onCatalogItemPress={(item: LineItem) => addOrRemoveLineItem(item)}
          />
        </View>
        <View style={styles.order}>
          <Title name={"Order"} />
          <OrderList lineItems={lineItems}  addOrRemoveLineItem={(item: LineItem) => addOrRemoveLineItem(item)}/>
        </View>
      </View>
      <DiscountAndBill
        onPressDiscount={gotoDiscounts}
        order={lineItems}
        bill={bill}
      />
    </Layout>
  );
};

export default MainView;
