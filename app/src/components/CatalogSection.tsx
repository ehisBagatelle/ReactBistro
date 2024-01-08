import React from "react";
import { SectionList } from "react-native";
import CatalogItem from "./CatalogItem";
import { Title } from "../components/Title";
import { LineItem } from "../services/OrderService";

interface Props {
  sections: {
    title: string;
    data: LineItem[];
  }[];
  onCatalogItemPress: (item: LineItem) => void;
}

const CatalogSection: React.FC<Props> = ({ sections, onCatalogItemPress }) => {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => (
        <CatalogItem item={item} onPress={() => onCatalogItemPress(item)} />
      )}
      renderSectionHeader={({ section: { title } }) => <Title name={title} />}
    />
  );
};

export default CatalogSection;
