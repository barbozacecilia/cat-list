import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderColor: "#bbb",
    borderBottomWidth: 2,
    padding: 2,
  },
  containerImgName: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  name: {
    justifyContent: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#373737",
  },
  origin: {
    color: "#727272",
    fontSize: 12,
    fontWeight: "regular",
  },
  iconInfoContainer: {
    flexDirection: "row",
  },
  iconInfo: {
    marginTop: 10,
  },
  iconCatContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#ffafcc",
    marginRight: 5,
    alignItems: "center", // -
    justifyContent: "center", // |
  },
  iconCat: {
    alignSelf: "center",
    resizeMode: "contain", //
    color: "#727272",
  },
});

export default styles;
