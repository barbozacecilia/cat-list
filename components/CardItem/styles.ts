import { StyleSheet } from "react-native";
import { Color } from "@/constants/Colors";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: Color.background,
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
    backgroundColor: "#ffcdb2",
    marginRight: 5,
    alignItems: "center", // -
    justifyContent: "center", // |
  },
  iconCat: {
    alignSelf: "center",
    resizeMode: "contain", //
    color: Color.icons,
  },
});

export default styles;
