import React from "react";
import {
  View,
} from "react-native";
import { styles } from "./Main.styles";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import { LineItem } from "../../services/OrderService";
import DiscountAndBill from "../../components/DiscountAndBill";
import OrderList from "../../components/OrderList";
import CatalogSection from "../../components/CatalogSection";

interface Props {
  categories: {
    title: string;
    data: LineItem[];
  }[];
  order: LineItem[];
  gotoDiscounts: () => void;
}

const MainView: React.FC<Props> = ({
  categories,
  order,
  gotoDiscounts,
}: Props) => {
  return (
    <Layout>
      <View style={styles.catalogAndOrder}>
        <View style={styles.catalog}>
          <CatalogSection
            sections={categories}
            onCatalogItemPress={(item: LineItem) => console.log(`${item.name}`)}
          />
        </View>
        <View style={styles.order}>
          <Title name={"Order"} />
          <OrderList order={order} />
        </View>
      </View>
      <DiscountAndBill onPressDiscount={gotoDiscounts} order={order} />
    </Layout>
  );
};

export default MainView;
