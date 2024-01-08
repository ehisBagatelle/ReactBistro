import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

interface Props {
  name: string;
  iconSource?: ImageSourcePropType;
}

export const Title = ({ name, iconSource }: Props) => {
  return (
    <View style={styles.box}>
      <Text>{name}</Text>
      {iconSource && <Image source={iconSource} />}
    </View>
  );
};

export const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 45,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
    alignItems: "center",
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
