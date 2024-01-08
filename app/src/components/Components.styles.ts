import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    padding: 10,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },

  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#FFF",

    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
  discountAndBill: {
    width: "55%",
    alignSelf: "flex-end",
  },
  discount: {},
  bill: {
    padding: 15,
    width: "100%",
  },
  billItem: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  billItemText: {
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "400",
  },
  billItemAmount: {
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
  },
});
