import React, { ReactNode } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native";


interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/icons8-bistro-64.png")} />
        <Text style={styles.logoText}>React Bistro</Text>
      </View>
      <View style={{ width: "100%" }}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: '100%'
  },
  header:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    width: '100%',
    paddingVertical: 10
  },
  logoText:{
    color: "#000",
    fontSize: 60,
    fontStyle: "normal",
    fontWeight: "400",
  }
});

export default Layout;
