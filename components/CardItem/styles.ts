import { StyleSheet } from "react-native";
import { Color } from "@/constants/Color";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: Color.white,
    borderColor: Color.grey,
    borderBottomWidth: 1,
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
    color: Color.secundary,
  },
  origin: {
    color: Color.grey,
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
    backgroundColor: Color.terciary,
    marginRight: 5,
    alignItems: "center", // -
    justifyContent: "center", // |
  },
  iconCat: {
    alignSelf: "center",
    resizeMode: "contain", //
    color: Color.grey,
  },
});

export default styles;
