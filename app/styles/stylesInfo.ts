import { StyleSheet } from "react-native";
import { Color } from "@/constants/Color";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.terciary,
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "flex-end", // |
  },
  decorationContainer: {
    backgroundColor: Color.white,
    height: "200%",
    width: "200%",
    alignItems: "center",
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
    bottom: "-180%",
    left: "-50%",
    right: 0,
    borderTopLeftRadius: 950,
    borderTopRightRadius: 950,
  },
  image: {
    width: "100%",
    overflow: "hidden",
    height: 400,
  },
  infoContainer: {
    backgroundColor: Color.white,
    paddingBottom: 10,
    maxHeight: "100%",
    padding: 25,
    alignContent: "flex-start",
    alignItems: "flex-start", // -
    justifyContent: "flex-end", // |
    flex: 2,
  },
  titleContainer: {
    flexDirection: "row",
    margin: 10,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    color: Color.secundary,
  },
});

export default styles;
